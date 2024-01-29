import { pg } from '@lucia-auth/adapter-postgresql';
import { google } from '@lucia-auth/oauth/providers';
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
      privacy_statistics: data.privacy_statistics,
      privacy_friends: data.privacy_friends,
    };
  },
});

export const googleAuth = google(auth, {
  clientId: process.env.GOOGLE_CLIENT_ID ?? '',
  clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
  redirectUri: 'http://localhost:3000/login/google/callback',
});

export type Auth = typeof auth;
