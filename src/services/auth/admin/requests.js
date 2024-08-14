import handleRequests from '@/services';
import { defaultInstance } from '@/services/instances';
import { REGISTER } from './endpoints';

const register = async (data) => {
  const res = await handleRequests(defaultInstance, {
    url: REGISTER,
    data,
    method: 'post',
  });

  return res;
};

export { register };
