import axios, { AxiosError } from 'axios';
import { Cookies } from 'quasar';

export const axiosInstance = axios.create({
  baseURL: 'https://quasar-server.onrender.com/',
  // baseURL: 'http://192.168.0.109:3000',
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
