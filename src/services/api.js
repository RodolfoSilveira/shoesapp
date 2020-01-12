import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3d5a3fb3.ngrok.io',
});

export default api;
