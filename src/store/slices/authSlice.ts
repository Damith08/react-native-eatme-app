import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {IAuthState, IRootUser} from '../../types/auth.types';
import {LoginFormData, RegisterFormData} from '../../types/types';
import axios from 'axios';
import {AuthTypes} from '../types/authTypes';

const initialState: IAuthState = {
  loading: false,
};

export const registerUser = createAsyncThunk(
  AuthTypes.REQUEST_TO_REGISTER,
  async (payload: RegisterFormData, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        'http://192.168.1.12:3000/auth/signup',
        payload,
      );
      return response.data;
    } catch (error) {
      console.log(error, 'error');
      return rejectWithValue('error');
    }
  },
);

export const requestToLogin = createAsyncThunk(
  AuthTypes.REQUEST_TO_LOGIN,
  async (payload: LoginFormData, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        'http://192.168.1.12:3000/auth/login',
        payload,
      );
      return response.data;
    } catch (error) {
      console.log(error, 'error');
      return rejectWithValue('error');
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | undefined>) => {
      state.accessToken = action.payload;
    },
    setRootUser: (state, action: PayloadAction<IRootUser | undefined>) => {
      state.rootUser = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload, 'filled');
        state.accessToken = action.payload;
      })
      .addCase(registerUser.rejected, state => {
        state.loading = false;
      });
    builder
      .addCase(requestToLogin.pending, state => {
        state.loading = true;
      })
      .addCase(requestToLogin.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload, 'filled');
        state.accessToken = action.payload;
      })
      .addCase(requestToLogin.rejected, state => {
        state.loading = false;
      });
  },
});

export const {setAccessToken, setRootUser} = authSlice.actions;

export default authSlice.reducer;
