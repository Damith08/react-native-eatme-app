import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {RestaurantType} from '../types/restaurantTypes';
import {IRestaurantSlice, IRestaurant} from '../../types/restaurant.types';
import {IResponse} from '../../types/common.types';

const initialState: IRestaurantSlice = {
  loading: false,
};

export const fetchRestaurantDetails = createAsyncThunk<IRestaurant, void>(
  RestaurantType.REQUEST_RESTAURANT_DETAILS,
  async (_, {rejectWithValue}) => {
    try {
      const response = await axios.get<IResponse<IRestaurant>>(
        'http://10.0.2.2:3000/restaurants/669bd162268fadeed47e0fce',
      );
      return response.data.data;
    } catch (error) {
      console.error('Error fetching restaurant details:', error);
      return rejectWithValue(null);
    }
  },
);

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    clearDetails: state => {
      state.loading = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchRestaurantDetails.pending, state => {
        state.loading = true;
      })
      .addCase(fetchRestaurantDetails.fulfilled, (state, action) => {
        state.loading = false;
        console.log('action.payload', action.payload);
        state.restaurant = action.payload;
      })
      .addCase(fetchRestaurantDetails.rejected, state => {
        state.loading = false;
      });
  },
});

export const {clearDetails} = restaurantSlice.actions;

export default restaurantSlice.reducer;
