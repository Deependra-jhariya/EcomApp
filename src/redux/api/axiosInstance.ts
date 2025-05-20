import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add interceptors for token handling
axiosInstance.interceptors.request.use(
  async (config: any) => {
    // Example: add token if available
    // const token = await getToken();
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error: any) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    // Handle global errors here
    console.log('API Error: ', error?.response?.data || error.message);
    return Promise.reject(error);
  },
);

export default axiosInstance;
