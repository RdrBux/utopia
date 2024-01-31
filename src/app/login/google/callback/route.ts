import { cookies } from 'next/headers';
import { OAuth2RequestError } from 'arctic';
import { generateId } from 'lucia';
import { google, lucia } from '@/auth/lucia';
import { sql } from '@vercel/postgres';

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');

  const storedState = cookies().get('state')?.value ?? null;
  const storedCodeVerifier = cookies().get('code_verifier')?.value ?? null;
  if (!code || !storedState || !storedCodeVerifier || state !== storedState) {
    return new Response(null, {
      status: 400,
    });
  }

  try {
    const tokens = await google.validateAuthorizationCode(
      code,
      storedCodeVerifier
    );
    const googleUserResponse = await fetch(
      'https://openidconnect.googleapis.com/v1/userinfo',
      {
        headers: {
          Authorization: `Bearer ${tokens.accessToken}`,
        },
      }
    );
    const googleUser = await googleUserResponse.json();
    console.log('hi');
    const existingUser = await sql`
      SELECT * FROM oauth_account
      WHERE provider_id = 'google' AND provider_user_id = ${googleUser.id}
    `;

    if (existingUser.rows.length > 0) {
      const session = await lucia.createSession(existingUser.rows[0].id, {});
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
      return new Response(null, {
        status: 302,
        headers: {
          Location: '/',
        },
      });
    }

    const userId = generateId(15);
    await sql`
      INSERT INTO auth_user(id, email, firstname, lastname, img_url) VALUES (${userId}, ${googleUser.email}, ${googleUser.given_name}, ${googleUser.family_name}, ${googleUser.picture})
    `;
    await sql`
      INSERT INTO oauth_account (provider_id, provider_user_id, user_id) VALUES ('google', ${String(
        googleUser.sub
      )}, ${userId})
    `;

    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
    return new Response(null, {
      status: 302,
      headers: {
        Location: '/',
      },
    });
  } catch (e) {
    // the specific error message depends on the provider
    if (e instanceof OAuth2RequestError) {
      // invalid code
      return new Response(null, {
        status: 400,
      });
    }
    return new Response(null, {
      status: 500,
    });
  }
}

/* import { auth, googleAuth } from '@/auth/lucia';
import { OAuthRequestError } from '@lucia-auth/oauth';
import { cookies, headers } from 'next/headers';

import type { NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  const storedState = cookies().get('google_oauth_state')?.value;
  const url = new URL(request.url);
  const state = url.searchParams.get('state');
  const code = url.searchParams.get('code');
  // validate state
  if (!storedState || !state || storedState !== state || !code) {
    return new Response(null, {
      status: 400,
    });
  }
  try {
    const { getExistingUser, googleUser, createUser } =
      await googleAuth.validateCallback(code);

    const getUser = async () => {
      const existingUser = await getExistingUser();
      if (existingUser) return existingUser;
      const user = await createUser({
        attributes: {
          email: googleUser.email || '',
          firstname: googleUser.given_name || '',
          lastname: googleUser.family_name || '',
          date_of_birth: '',
          img_url: googleUser.picture || '',
        },
      });
      return user;
    };

    const user = await getUser();
    const session = await auth.createSession({
      userId: user.userId,
      attributes: {},
    });
    const authRequest = auth.handleRequest(request.method, {
      cookies,
      headers,
    });
    authRequest.setSession(session);
    return new Response(null, {
      status: 302,
      headers: {
        Location: '/', // redirect to profile page
      },
    });
  } catch (e) {
    if (e instanceof OAuthRequestError) {
      // invalid code
      return new Response(null, {
        status: 400,
      });
    }
    return new Response(null, {
      status: 500,
    });
  }
};
 */
