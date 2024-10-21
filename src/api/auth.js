import axios from './axios';

export const register = (username, email, password) => {
  console.log('Registering user:', { username, email, password });
  return axios.post('/users/register', {
    username,
    email,
    password,
  }).catch(error => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Server responded with error:", error.response.data);
      throw new Error(error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
      throw new Error("No response from server");
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error setting up request:", error.message);
      throw error;
    }
  });
};

export const login = (username, password) => {
  console.log('Logging in user:', { username, password });
  return axios.post('/users/login', {
    username,
    password,
  });
};

export const verifyEmail = (token) => {
  return axios.get(`/users/verify-email?token=${token}`);
};
