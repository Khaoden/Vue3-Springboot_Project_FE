import axios from './axios';

export const getUserProfile = () => {
  return axios.get('/users/profile');
};

export const updateUserProfile = (userData) => {
  return axios.put('/users/profile', userData);
};

// 添加其他用户相关的 API 调用
