import axios from './axios';

export const register = (username, email, password) => {
  return axios.post('/users/register', {
    username,
    email,
    password,
  });
};

export const login = (username, password) => {
  return axios.post('/users/login', {
    username,
    password,
  });
};