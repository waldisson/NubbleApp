import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3333/',
  headers: {
    Authorization:
      'Bearer MTM.kgzIOyxHvaU1fh7vo9Pn3pO55M_zkjgc8IfcZM6aJP_bYgH7A8QBlZLDTBWw',
  },
});
