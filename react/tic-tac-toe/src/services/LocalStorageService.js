export default {
  getToken: (key) => localStorage.getItem(key),
  setToken: (key, value) => localStorage.setItem(key, value),
  deleteToken: (key) => localStorage.removeItem(key)
};
