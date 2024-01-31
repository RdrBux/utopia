import { google } from '@/auth/lucia';
import { generateCodeVerifier, generateState } from 'arctic';
import { cookies } from 'next/headers';

export async function GET(): Promise<Response> {
  const state = generateState();
  const codeVerifier = generateCodeVerifier();
  const url = await google.createAuthorizationURL(state, codeVerifier, {
    scopes: ['openid', 'email', 'profile'],
  });

  cookies().set('state', state, {
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 60 * 10,
  });

  cookies().set('code_verifier', codeVerifier, {
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 60 * 10,
  });

  return Response.redirect(url);
}

/* import { googleAuth } from '@/auth/lucia';
import * as context from 'next/headers';

import type { NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  const [url, state] = await googleAuth.getAuthorizationUrl();
  // store state
  context.cookies().set('google_oauth_state', state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60,
  });
  return new Response(null, {
    status: 302,
    headers: {
      Location: url.toString(),
    },
  });
};
 */
