import { format } from 'date-fns';

export function dateToString(date) {
  if (!date) {
    return '';
  }
  //   return 'OK';
  return format(date, 'yyyy年M月d日 HH:mm');
}
