import axios from 'axios';

const getData = () => {
  return axios.get('/api/dashboard');
};

const dashboardService = {
  getData,
};

export default dashboardService;