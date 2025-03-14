import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { loginService } from '../services/authService';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: { username: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await loginService(credentials);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response && error.response.data) {
        if (typeof error.response.data === 'string' && error.response.data.includes('<!DOCTYPE html>')) {
          return rejectWithValue('An unexpected error occurred. Please try again later.');
        }
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue((error as Error).message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload as string | null;
      });
  },
});

export default authSlice.reducer;