import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.extrazone.com',
  headers: {
    'Content-Type': 'application/json',
    'X-Country-Id': 'TR',
    'X-Language-Id': 'TR',
  },
});

export default api;
