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
  const terms = formData.get('terms');

  // basic check
  if (terms !== 'on') {
    return NextResponse.json(
      {
        error: 'Debe aceptar los términos y condiciones',
        type: 'terms',
      },
      {
        status: 200,
      }
    );
  }

  if (
    typeof firstname !== 'string' ||
    firstname.length < 1 ||
    firstname.length > 100
  ) {
    return NextResponse.json(
      {
        error: 'Nombre inválido',
        type: 'firstname',
      },
      {
        status: 200,
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
        error: 'Apellido inválido',
        type: 'lastname',
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
        status: 400,
      }
    );
  }
  if (password !== repeatPassword) {
    return NextResponse.json(
      {
        error: 'Las contraseñas no coinciden',
        type: 'repeat-password',
      },
      {
        status: 200,
      }
    );
  }
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
        privacy_statistics: 'all',
        privacy_friends: 'all',
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
  } catch (e: any) {
    if (e.code === '23505') {
      return NextResponse.json(
        {
          error: 'Ya existe una cuenta con ese correo',
          type: 'email',
        },
        {
          status: 200,
        }
      );
    }

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
