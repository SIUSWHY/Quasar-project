import axios from 'axios';
import { Cookies } from 'quasar';
export const axiosInstance = axios.create({
  baseURL: 'https://pet-quasar-app.herokuapp.com/',
  // baseURL: 'http://localhost:3000',
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
