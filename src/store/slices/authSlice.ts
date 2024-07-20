import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
  IAuthSlice,
  IToken,
  IUser,
  CheckEmailData,
  LoginFormData,
  RegisterFormData,
} from '../../types/auth.types';
import {IResponse} from '../../types/common.types';
import axios from 'axios';
import {AuthTypes} from '../types/authTypes';

const initialState: IAuthSlice = {
  loading: false,
};

export const requestToRegister = createAsyncThunk<IUser, RegisterFormData>(
  AuthTypes.REQUEST_TO_REGISTER,
  async (payload: RegisterFormData, {rejectWithValue}) => {
    try {
      const response = await axios.post<IResponse<IUser>>(
        'http://10.0.2.2:3000/auth/signup',
        payload,
      );
      return response.data.data;
    } catch (error) {
      console.error(error, 'error');
      return rejectWithValue('error');
    }
  },
);

export const requestToLogin = createAsyncThunk<IToken, LoginFormData>(
  AuthTypes.REQUEST_TO_LOGIN,
  async (payload: LoginFormData, {rejectWithValue}) => {
    try {
      const response = await axios.post<IResponse<IToken>>(
        'http://10.0.2.2:3000/auth/login',
        payload,
      );
      return response.data.data;
    } catch (error) {
      console.error(error, 'error');
      return rejectWithValue('error');
    }
  },
);

export const checkEmail = createAsyncThunk(
  AuthTypes.CHECK_EMAIL,
  async (payload: CheckEmailData, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        'http://10.0.2.2:3000/auth/check-email',
        payload,
      );
      return response.data;
    } catch (error) {
      console.error(error, 'error');
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
  },
  extraReducers: builder => {
    builder
      .addCase(requestToRegister.pending, state => {
        state.loading = true;
      })
      .addCase(requestToRegister.fulfilled, state => {
        state.loading = false;
      })
      .addCase(requestToRegister.rejected, state => {
        state.loading = false;
      })
      .addCase(requestToLogin.pending, state => {
        state.loading = true;
      })
      .addCase(requestToLogin.fulfilled, state => {
        state.loading = false;
      })
      .addCase(requestToLogin.rejected, state => {
        state.loading = false;
      })
      .addCase(checkEmail.pending, state => {
        state.loading = true;
      })
      .addCase(checkEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.accessToken = action.payload;
      })
      .addCase(checkEmail.rejected, state => {
        state.loading = false;
      });
  },
});

export const {setAccessToken} = authSlice.actions;

export default authSlice.reducer;
