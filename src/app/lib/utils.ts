import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale/es';

export function formatDateDistance(date: string) {
  return formatDistanceToNow(date, { locale: es });
}

export function validateEmail(email: string) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
