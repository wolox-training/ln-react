import { create } from 'apisauce';

const api = create({
  baseURL: process.env.REACT_APP_API_BASE_URL, //'http://localhost:3005'
  timeout: 5000
});

export default api;
