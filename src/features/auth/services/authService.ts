import axios from 'axios';

interface Credentials {
  username: string;
  password: string;
}

const login = (credentials: Credentials) => {
  return axios.post('/api/login', credentials);
};

const authService = {
  login,
};

export default authService;