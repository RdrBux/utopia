import { pg } from '@lucia-auth/adapter-postgresql';
import { db } from '@vercel/postgres';
import { lucia } from 'lucia';
import { nextjs_future } from 'lucia/middleware';

// expect error (see next section)
export const auth = lucia({
  adapter: pg(db, {
    user: 'auth_user',
    key: 'user_key',
    session: 'user_session',
  }),
  env: 'DEV', // "PROD" if deployed to HTTPS
  middleware: nextjs_future(), // NOT nextjs()
  sessionCookie: {
    expires: false,
  },

  getUserAttributes: (data) => {
    return {
      email: data.email,
      firstname: data.firstname,
      lastname: data.lastname,
      img_url: data.img_url,
      bio: data.bio,
      date_of_birth: data.date_of_birth,
    };
  },
});

export type Auth = typeof auth;
