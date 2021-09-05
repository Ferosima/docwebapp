import axios from "axios";
import { toast } from "react-toastify";
import { setToken, authClear } from "./actions/auth";
import { userClear } from "./actions/user";
import Toast from "../components/Toast";

export const API_URL = "http://192.168.0.105:3000/api";

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
        store.dispatch(setToken(response.data.accessToken));
        return client.request(originalRequest);
      } catch (e) {
        store.dispatch(authClear());
        toast.error(<Toast message="expired" />);
      }
    }
    throw error;
  },
);

export default client;
