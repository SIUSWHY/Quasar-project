import axios, { AxiosError } from 'axios';
import { Cookies } from 'quasar';

const apiUrl = process.env.DEV ? 'https://192.168.88.47:3000' : 'https://quasar-server.onrender.com/';
// const apiUrl = 'https://quasar-server.onrender.com';
export const axiosInstance = axios.create({
  baseURL: apiUrl,
});

axiosInstance.interceptors.request.use(
  config => {
    config.headers.Authorization = 'Bearer ' + Cookies.get('Token');
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(undefined, (error: AxiosError) => {
  const err = error.response?.data || error.message;
  return Promise.reject(err);
});
