import axios from "axios";
import { call, put } from "redux-saga/effects";
import storage from "redux-persist/lib/storage";
import { push } from "connected-react-router";
import { authClear } from "./actions/auth";

export const API_URL = "http://localhost:3000";

const client = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

client.interceptors.request.use((config) => {
  storage.getItem("accessToken").then((token) => {
    config.headers.Authorization = `Bearer ${token}`;
  });
  return config;
});

client.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(`${API_URL}/auth/refresh`, { withCredentials: true });
        storage.setItem("accessToken", response.data.accessToken);
        return client.request(originalRequest);
      } catch (e) {
        console.log("НЕ АВТОРИЗОВАН");
      }
    }
    throw error;
  },
);

export default client;
