import axios, { AxiosError } from 'axios';

const apiUrl = process.env.DEV ? 'https://192.168.0.109:3000' : 'https://hermes-server.online/api/';
export const axiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    if (error.response.status === 401) {
      window.location.href = '/';
    } else {
      return Promise.reject(error);
    }
  }
);

axiosInstance.interceptors.response.use(undefined, (error: AxiosError) => {
  const err = error.response?.data || error.message;
  return Promise.reject(err);
});
