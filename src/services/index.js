import { defaultInstance } from './instances';
const handleRequests = async (
  instance = defaultInstance,
  config = {}
) => {
  const res = await instance.request(config);
  return res?.data;
};

export default handleRequests;
