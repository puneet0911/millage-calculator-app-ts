import axios from 'axios';
export const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Use your backend address
});
export const setToken = (token: string) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
