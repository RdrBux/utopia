import { auth } from '@/auth/lucia';
import * as context from 'next/headers';
import { NextResponse } from 'next/server';
import { LuciaError } from 'lucia';

import type { NextRequest } from 'next/server';
import { validateEmail } from '@/app/lib/utils';

export const POST = async (request: NextRequest) => {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  // basic check
  if (typeof email !== 'string' || validateEmail(email) === false) {
    return NextResponse.json(
      {
        error: 'Formato de correo inválido',
        type: 'email',
      },
      {
        status: 200,
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
        error: 'Contraseña debe tener entre 6 y 255 caracteres',
        type: 'password',
      },
      {
        status: 200,
      }
    );
  }
  try {
    // find user by key
    // and validate password
    const key = await auth.useKey('email', email.toLowerCase(), password);
    const session = await auth.createSession({
      userId: key.userId,
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
    if (e instanceof LuciaError && e.message === 'AUTH_INVALID_KEY_ID') {
      // user does not exist or invalid password
      return NextResponse.json(
        {
          error: 'Correo electrónico incorrecto',
          type: 'email',
        },
        {
          status: 200,
        }
      );
    }

    if (e instanceof LuciaError && e.message === 'AUTH_INVALID_PASSWORD') {
      // user does not exist
      return NextResponse.json(
        {
          error: 'Contraseña incorrecta',
          type: 'password',
        },
        {
          status: 200,
        }
      );
    }

    return NextResponse.json(
      {
        error: 'Ha habido un problema. Intente nuevamente',
      },
      {
        status: 500,
      }
    );
  }
};
