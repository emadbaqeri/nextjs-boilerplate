import { env } from "@/config";
import axios from "axios";
import type { AxiosError, AxiosRequestConfig } from "axios";
import qs from "qs";

const AXIOS_CONFIG: AxiosRequestConfig = {
  timeout: 3000,
  baseURL: env.API_URI,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => qs.stringify(params, { indices: false }),
};

const AXIOS_INSTANCE = axios.create(AXIOS_CONFIG);

axios.interceptors.request.use((config) => {
  /** Just simply a placeholder */
  const token = "";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  (res) => res,
  (error: AxiosError) => {
    const { data, status } = error.response || {};
    console.error("something is happening");
    switch (status) {
      case 400:
        console.error("400");
        break;

      case 401:
        console.error("unauthorised");
        break;

      case 404:
        console.error("/not-found");
        break;

      case 500:
        console.error("/server-error");
        break;
    }
    return Promise.reject(error);
  },
);

export const ApiClient = AXIOS_INSTANCE;
