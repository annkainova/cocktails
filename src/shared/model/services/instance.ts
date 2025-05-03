import axios, { AxiosInstance } from 'axios';

const HOST = `${import.meta.env.VITE_BACKEND_URL}`;

export const baseInstance = (): AxiosInstance => {
  const MAX_RETRIES = 3;
  const DELAY = 500;
  let RETRIES = 0;

  const instance = axios.create({
    baseURL: HOST,
  });

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const { config } = error;
      if (!config || RETRIES >= MAX_RETRIES) {
        return Promise.reject(error);
      }

      RETRIES++;

      await new Promise((resolve) => setTimeout(resolve, DELAY));
      return instance(config);
    }
  );

  return instance;
};
