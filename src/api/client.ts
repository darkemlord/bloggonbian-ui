import axios, { AxiosRequestHeaders } from "axios";
import Cookies from "js-cookie";

function getHeaders() {
  if (typeof window === "undefined") {
    return {};
  }

  return {
    "Access-token": Cookies.get("access_token"),
    Uid: Cookies.get("uid"),
  };
}

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    ...getHeaders(),
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const axiosFileClient = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    ...getHeaders(),
    Accept: "multipart/form-data",
    "Content-Type": "multipart/form-data",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const headers = getHeaders();
    config.headers = { ...config.headers, ...headers } as AxiosRequestHeaders;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosFileClient.interceptors.request.use(
  (config) => {
    const headers = getHeaders();
    config.headers = { ...config.headers, ...headers } as AxiosRequestHeaders;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
