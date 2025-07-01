import axios from 'axios';


export const axiosRequests = axios.create({
  baseURL: process.env.API_PROXY_BASE_URL || 'http://localhost:5000',
  timeout: 20000,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  },
})
export const registerUser = async (data) => {
  return await axiosRequests.post('/user/register', data);
};

export const loginUser = async (data) => {
  return await axiosRequests.post('/user/login', data);
};
