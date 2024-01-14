import { validateEmail } from '@/app/lib/utils';
import { auth } from '@/auth/lucia';
import * as context from 'next/headers';
import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

export const POST = async (request: NextRequest) => {
  const formData = await request.formData();
  const email = formData.get('email');
  const firstname = formData.get('firstname');
  const lastname = formData.get('lastname');
  const password = formData.get('password');
  const repeatPassword = formData.get('repeat-password');

  const dateOfBirth = formData.get('date-of-birth');
  console.log({
    email,
    firstname,
    lastname,
    password,
    repeatPassword,
    dateOfBirth,
  });
  // basic check
  if (
    typeof firstname !== 'string' ||
    firstname.length < 1 ||
    firstname.length > 100
  ) {
    return NextResponse.json(
      {
        error: 'Invalid firstname',
      },
      {
        status: 400,
      }
    );
  }
  if (
    typeof lastname !== 'string' ||
    lastname.length < 1 ||
    lastname.length > 100
  ) {
    return NextResponse.json(
      {
        error: 'Invalid lastname',
      },
      {
        status: 400,
      }
    );
  }
  if (
    typeof password !== 'string' ||
    password.length < 6 ||
    password.length > 255
  ) {
    return NextResponse.json(
      {
        error: 'Invalid password',
      },
      {
        status: 400,
      }
    );
  }
  if (password !== repeatPassword) {
    return NextResponse.json(
      {
        error: 'Passwords do not match',
      },
      {
        status: 400,
      }
    );
  }
  if (typeof email !== 'string' || validateEmail(email) === false) {
    return NextResponse.json(
      {
        error: 'Invalid email',
      },
      {
        status: 400,
      }
    );
  }
  if (typeof dateOfBirth !== 'string' || dateOfBirth.length < 1) {
    return NextResponse.json(
      {
        error: 'Invalid date of birth',
      },
      {
        status: 400,
      }
    );
  }
  try {
    const user = await auth.createUser({
      key: {
        providerId: 'email', // auth method
        providerUserId: email.toLowerCase(),
        password, // hashed by Lucia
      },
      attributes: {
        email,
        firstname,
        lastname,
        date_of_birth: dateOfBirth,
      },
    });
    const session = await auth.createSession({
      userId: user.userId,
      attributes: {},
    });
    const authRequest = auth.handleRequest(request.method, context);
    authRequest.setSession(session);
    return new Response(null, {
      status: 302,
      headers: {
        Location: '/', // redirect to profile page
      },
    });
  } catch (e) {
    // this part depends on the database you're using
    // check for unique constraint error in user table
    /* if (
			e instanceof SomeDatabaseError &&
			e.message === USER_TABLE_UNIQUE_CONSTRAINT_ERROR
		) {
			return NextResponse.json(
				{
					error: "Username already taken"
				},
				{
					status: 400
				}
			);
		} */

    return NextResponse.json(
      {
        error: 'An unknown error occurred',
      },
      {
        status: 500,
      }
    );
  }
};
