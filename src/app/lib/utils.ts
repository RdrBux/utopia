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

export const roundTo100 = (arr: number[]) => {
  let output = [];
  let acc = 0;

  for (let i = 0; i < arr.length; i++) {
    let roundedCur = Math.round(arr[i]);
    const currentAcc = acc;
    if (acc == 0) {
      output.push(roundedCur);
      acc += arr[i];
      continue;
    }
    acc += arr[i];
    output.push(Math.round(acc) - Math.round(currentAcc));
  }

  return output;
};
