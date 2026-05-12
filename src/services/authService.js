import api from './api';

const authService = {
<<<<<<< HEAD
  login: async ({ username, password }) => {
    const response = await api.post('/auth/login', { username, password });
=======
  login: async ({ email, password }) => {
    const response = await api.post('/auth/login', { email, password });
>>>>>>> d4bf575de42c8907934c015290dc9c876c5de6de
    if (response?.data?.token) {
      localStorage.setItem('kognivexToken', response.data.token);
    }
    return response.data;
  }
};

export default authService;
