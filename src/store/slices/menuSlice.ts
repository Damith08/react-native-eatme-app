import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IMenuSlice} from '../../types/menu.types';
const initialState: IMenuSlice = {};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setSelectedCategoryId: (state, action: PayloadAction<string>) => {
      state.selectedCategoryId = action.payload;
    },
  },
});

export const {setSelectedCategoryId} = menuSlice.actions;
export default menuSlice.reducer;
