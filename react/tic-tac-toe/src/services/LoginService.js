import api from '../config/api';

export default {
  validateLogin: (user, pass) => api.post('/login', { email: user, password: pass })
};
