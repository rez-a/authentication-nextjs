import axios from 'axios';
import { baseurl } from './baseURL';

const defaultInstance = axios.create({
  baseURL: baseurl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  validateStatus: (status) => {
    return status >= 200 && status <= 300;
  },
  method: 'get',
});

export { defaultInstance };
