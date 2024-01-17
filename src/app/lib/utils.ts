import { auth } from '@/auth/lucia';
import { formatDistanceToNowStrict } from 'date-fns';
import { es } from 'date-fns/locale/es';
import { cache } from 'react';
import * as context from 'next/headers';

export function formatDateDistance(date: string) {
  return formatDistanceToNowStrict(date, { locale: es });
}

export function validateEmail(email: string) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export const getPageSession = cache(() => {
  const authRequest = auth.handleRequest('GET', context);
  return authRequest.validate();
});
