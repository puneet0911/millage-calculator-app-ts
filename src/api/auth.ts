import { api } from '.';

export const login = (email: string, password: string) =>
  api.post('/login', { email, password });

export const register = (payload: { name: string; email: string; password: string; role: string }) =>
  api.post('/register', payload);
