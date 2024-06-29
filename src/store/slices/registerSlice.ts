import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {IRegisterState} from '../types/auth.types';
import {RegisterFormData} from '../../types/types';
import axios from 'axios';

const initialState: IRegisterState = {
  loading: false,
  fail: null,
};

export const registerUser = createAsyncThunk(
  'register/registerUser',
  async (data: RegisterFormData, {rejectWithValue}) => {
    try {
      const response = await axios.post('http://localhost:3000/auth/signup');
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data);
      } else {
        return rejectWithValue('An unexpected error occurred');
      }
    }
  },
);

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.loading = true;
        state.fail = null;
      })
      .addCase(registerUser.fulfilled, state => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, state => {
        state.loading = false;
        state.fail = 'Error';
      });
  },
});

export default registerSlice.reducer;
