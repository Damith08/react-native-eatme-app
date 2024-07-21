import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ICategory, ICategorySlice} from '../../types/menu.types';
import {CategoryTypes} from '../types/categoryTypes';
import axios from 'axios';
import {IResponse} from '../../types/common.types';

const initialState: ICategorySlice = {
  loading: false,
  category: [],
};

export const requestToCategories = createAsyncThunk<
  ICategory[],
  void,
  {rejectValue: boolean}
>(CategoryTypes.REQUEST_TO_CATEGORY_DETAILS, async (_, {rejectWithValue}) => {
  try {
    const response = await axios.get<IResponse<ICategory[]>>(
      'http://10.0.2.2:3000/dish-categories',
    );
    return response.data.data;
  } catch (error) {
    console.error('Error fetching catagories details:', error);
    return rejectWithValue(true);
  }
});

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    clearDetails: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(requestToCategories.pending, state => {
        state.loading = true;
      })
      .addCase(requestToCategories.fulfilled, (state, action) => {
        state.loading = false;
        console.log('action.payload', action.payload);
        state.category = action.payload;
      })
      .addCase(requestToCategories.rejected, state => {
        state.loading = false;
      });
  },
});

export const {clearDetails} = categorySlice.actions;

export default categorySlice.reducer;
