import { NodePostgresAdapter } from '@lucia-auth/adapter-postgresql';
import { webcrypto } from 'node:crypto';
import { Lucia } from 'lucia';
import pg from 'pg';
import { db } from '@vercel/postgres';

const adapter = new NodePostgresAdapter(db, {
  user: 'auth_user',
  session: 'user_session',
});

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    name: 'session',
    // this sets cookies with super long expiration
    // since Next.js doesn't allow Lucia to extend cookie expiration when rendering pages
    expires: false,
    attributes: {
      // set to `true` when using HTTPS
      secure: process.env.NODE_ENV === 'production',
    },
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

/* export const googleAuth = google(auth, {
  clientId: process.env.GOOGLE_CLIENT_ID ?? '',
  clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
  redirectUri: 'http://localhost:3000/login/google/callback',
});

export type Auth = typeof auth;
 */
declare module 'lucia' {
  interface Register {
    Lucia: typeof lucia;
    DatabaseSessionAttributes: DatabaseSessionAttributes;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

interface DatabaseSessionAttributes {}
interface DatabaseUserAttributes {
  email?: string;
  firstname: string;
  lastname: string;
  img_url?: string | null;
  bio?: string | null;
  privacy_statistics: 'all' | 'friends' | 'me';
  privacy_friends: 'all' | 'friends' | 'me';
  created_at?: string;
}

/* globalThis.crypto = webcrypto as Crypto; */
