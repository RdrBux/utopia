'use server';

import { ActionResult } from 'next/dist/server/app-render/types';
import { getUser, validateEmail } from './utils';
import { Argon2id } from 'oslo/password';
import { generateId } from 'lucia';
import { lucia } from '@/auth/lucia';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { sql } from '@vercel/postgres';

export async function signup(/* _: any, */ formData: FormData) {
  const email = formData.get('email');
  const firstname = formData.get('firstname');
  const lastname = formData.get('lastname');
  const password = formData.get('password');
  const repeatPassword = formData.get('repeat-password');
  const terms = formData.get('terms');
  // basic check
  if (terms !== 'on') {
    return {
      error: 'Debe aceptar los términos y condiciones',
      type: 'terms',
      status: 200,
    };
  }

  if (
    typeof firstname !== 'string' ||
    firstname.length < 1 ||
    firstname.length > 100
  ) {
    return {
      error: 'Nombre inválido',
      type: 'firstname',
      status: 200,
    };
  }
  if (
    typeof lastname !== 'string' ||
    lastname.length < 1 ||
    lastname.length > 100
  ) {
    return {
      error: 'Apellido inválido',
      type: 'lastname',
      status: 200,
    };
  }
  if (
    typeof password !== 'string' ||
    password.length < 6 ||
    password.length > 255
  ) {
    return {
      error: 'Contraseña debe tener entre 6 y 255 caracteres',
      type: 'password',
      status: 400,
    };
  }
  if (password !== repeatPassword) {
    return {
      error: 'Las contraseñas no coinciden',
      type: 'repeat-password',
      status: 200,
    };
  }
  if (typeof email !== 'string' || validateEmail(email) === false) {
    return {
      error: 'Formato de correo inválido',
      type: 'email',
      status: 200,
    };
  }

  const hashedPassword = await new Argon2id().hash(password);
  const userId = generateId(15);

  try {
    await sql`INSERT INTO auth_user (id, email, firstname, lastname) VALUES (${userId}, ${email.toLowerCase()}, ${firstname}, ${lastname})`;
    await sql`INSERT INTO password (hashed_password, user_id) VALUES (${hashedPassword}, ${userId})`;
  } catch (error) {
    console.error(error);
    return {
      error: 'Error al registrar usuario',
      status: 500,
    };
  }

  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect('/');
}

export async function login(_: any, formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');
  // basic check
  if (typeof email !== 'string' || validateEmail(email) === false) {
    return {
      error: 'Formato de correo inválido',
      type: 'email',
    };
  }
  if (
    typeof password !== 'string' ||
    password.length < 6 ||
    password.length > 255
  ) {
    return {
      error: 'Contraseña debe tener entre 6 y 255 caracteres',
      type: 'password',
    };
  }

  try {
    const existingUser = await sql`
			SELECT * FROM auth_user
			WHERE email = ${email}
		`;
    if (!existingUser || existingUser.rows.length === 0) {
      return {
        error: 'No hay ninguna cuenta asociada a este correo',
        type: 'email',
      };
    }

    const passwordDb = await sql`
			SELECT hashed_password FROM password
			WHERE user_id = ${existingUser.rows[0].id}
		`;

    const hashed_password = passwordDb.rows[0].hashed_password;

    if (!hashed_password) {
      return {
        error: 'Contraseña incorrecta',
        type: 'password',
      };
    }

    const validPassword = await new Argon2id().verify(
      hashed_password,
      password
    );

    if (!validPassword) {
      return {
        error: 'Contraseña incorrecta',
        type: 'password',
      };
    }
    const session = await lucia.createSession(existingUser.rows[0].id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
    return redirect('/');
  } catch (error) {
    console.error(error);
    return {
      error: 'Error al iniciar sesión',
      type: 'Server',
    };
  }
}

export async function logout(): Promise<ActionResult> {
  'use server';
  const user = await getUser();
  if (!user) {
    return {
      error: 'Unauthorized',
    };
  }

  await lucia.invalidateSession(user.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect('/login');
}
