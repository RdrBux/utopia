/// <reference types="lucia" />
declare namespace Lucia {
  type Auth = import('./auth/lucia').Auth;
  type DatabaseUserAttributes = {
    email: string;
    firstname: string;
    lastname: string;
    img_url?: string | null;
    bio?: string | null;
    date_of_birth: string | null;
    created_at?: string;
  };
  type DatabaseSessionAttributes = {};
}
