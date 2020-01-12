import axios from 'axios';

const api = axios.create({
  baseURL: 'http://8abea1bd.ngrok.io',
});

export default api;
