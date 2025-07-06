import axios from 'axios';

export const axiosRequests = axios.create({
  baseURL: process.env.API_PROXY_BASE_URL || 'http://localhost:5000',
  timeout: 20000,
});

axiosRequests.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const registerUser = async (data) => {
  return await axiosRequests.post('/user/register', data);
};

export const loginUser = async (data) => {
  return await axiosRequests.post('/user/login', data);
};

export const CalculFood = async () => {
  return await axiosRequests.get('/food');
};
export const addFood = async (foodData) => {
  return await axiosRequests.post('/food/addfood', foodData);
};

export const saveMeal = (mealData) => {
  return axiosRequests.post('/history/new', mealData);
};
