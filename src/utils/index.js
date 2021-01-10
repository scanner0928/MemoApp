import { format } from 'date-fns';

export function dateToString(date) {
  if (!date) {
    return '';
  }
  //   return 'OK';
  return format(date, 'yyyy年M月d日 HH:mm');
}

export function translateErrors(code) {
  const error = {
    title: 'エラー',
    description: '時間をおいてお試しください',
  };
  switch (code) {
    case 'auth/invalid-email':
      error.description = 'メールアドレスが不正です';
      break;
    case 'auth/user-disabled':
      error.description = 'アカウントが無効です';
      break;
    case 'auth/user-not-found':
      error.description = 'ユーザーが見つかりませんでした';
      break;
    case 'auth/wrong-password':
      error.description = 'パスワードが間違っています';
      break;

    default:
      error.description = '時間をおいてお試しください';
  }
  return error;
}
