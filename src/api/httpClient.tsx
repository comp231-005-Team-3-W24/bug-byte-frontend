import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { getToken } from "../utils/storage";

const httpClient = axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  config.headers!.Authorization = `Bearer ${getToken()}`;
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

httpClient.interceptors.request.use(onRequest, onRequestError);

export default httpClient;
