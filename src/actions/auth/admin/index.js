'use server';

import { TOKEN } from '@/constants';
import { register } from '@/services/auth/admin/requests';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const handleRegister = async (data) => {
  try {
    const { data: token, status } = await register(data);
    const { exp, email } = jwt.decode(token);
    const maxAge = Math.ceil((exp * 1000 - Date.now()) / 1000);

    cookies().set({
      name: TOKEN,
      value: token,
      httpOnly: true,
      maxAge,
    });
    return {
      message: 'حساب کاربری شما با موفقیت ایجاد شد',
      status,
      email,
    };
  } catch (err) {
    const { data, status } = err?.response?.data;
    return { message: data, status };
  }
};

const whoIAm = async () => {
  try {
    const token = cookies().get(TOKEN).value;
    const { email } = jwt.decode(token);
    return email;
  } catch (err) {
    console.log('token is not existed');
    cookies().delete(TOKEN);
    return null;
  }
};

export { handleRegister, whoIAm };
