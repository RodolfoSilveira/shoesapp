import axios from 'axios';

const api = axios.create({
  baseURL: 'http://5ab8c892.ngrok.io',
});

export default api;
