import axios from "axios";
import storage from "redux-persist/lib/storage";
import { logout, setToken } from "./actions/auth";

export const API_URL = "http://localhost:3000";

let store;

export const injectStore = (_store) => {
  store = _store;
};
const client = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

client.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${store.getState().auth.accessToken}`;
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
        // storage.setItem("accessToken", response.data.accessToken);
        store.dispatch(setToken(response.data.accessToken));
        return client.request(originalRequest);
      } catch (e) {
        console.log("НЕ АВТОРИЗОВАН");
        store.dispatch(logout());
      }
    }
    throw error;
  },
);

export default client;
