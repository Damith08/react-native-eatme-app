import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import restaurantReducers from './slices/restaurantSlice';
import menuReducers from './slices/menuSlice';
import dishCategorySlice from './slices/categorySlice';

const rootReducer = combineReducers({
  auth: authReducer,
  restaurant: restaurantReducers,
  menu: menuReducers,
  category: dishCategorySlice,
});

export default rootReducer;
