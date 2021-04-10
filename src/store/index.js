import { createStore } from 'vuex';

export default createStore({
  state: {
    isAuth: false,
    token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
    expiresIn: localStorage.getItem('expiresIn')
      ? localStorage.getItem('expiresIn')
      : null,
  },
  getters: {
    getToken() {
      return localStorage.getItem('token')
        ? localStorage.getItem('token')
        : null;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
