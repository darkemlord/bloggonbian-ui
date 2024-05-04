import axios, { AxiosRequestHeaders } from "axios";

function getHeaders() {
  if (typeof window === "undefined") {
    return {};
  }

  return {
    Client: localStorage.getItem("client"),
    "Access-token": localStorage.getItem("access_token"),
    Uid: localStorage.getItem("uid"),
  };
}

const axiosClient = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL,
  headers: {
    ...getHeaders(),
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const axiosFileClient = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL,
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
