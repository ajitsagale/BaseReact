import axios from 'axios';

export const loginService = async (credentials: { username: string; password: string }) => {
  const response = await axios.post('/api/login', credentials);
  return response.data;
};