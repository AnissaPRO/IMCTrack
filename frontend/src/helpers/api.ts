import axios from 'axios';

export const registerUser = async (data: { name: string; email: string; password: string }) => {
  return await axios.post('/user/register', data);
};

export const loginUser = async (data: { email: string; password: string }) => {
  return await axios.post('user/login', data);
};
