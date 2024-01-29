/// <reference types="lucia" />
declare namespace Lucia {
  type Auth = import('./auth/lucia').Auth;
  type DatabaseUserAttributes = {
    email?: string;
    firstname: string;
    lastname: string;
    img_url?: string | null;
    bio?: string | null;
    privacy_statistics: 'all' | 'friends' | 'me';
    privacy_friends: 'all' | 'friends' | 'me';
    created_at?: string;
  };
  type DatabaseSessionAttributes = {};
}
