import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale/es';

export function formatDateDistance(date: string) {
  return formatDistanceToNow(date, { locale: es });
}
