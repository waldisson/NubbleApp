import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MTQ.aa5F6th20s4_1IGQH_r1cbhmcqarSlBof98HUJkyopfNZ0XnQJAzJsX-j3QH',
  },
});
