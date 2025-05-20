import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from './productTypes';
import axiosInstance from '../../api/axiosInstance';
import { ENDPOINTS } from '../../api/endpoints';
export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(ENDPOINTS?.PRODUCT)
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);
