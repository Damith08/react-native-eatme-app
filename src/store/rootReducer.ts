import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import restaurantReducers from './slices/restaurantSlice';
import menuReducers from './slices/menuSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  restaurant: restaurantReducers,
  menu: menuReducers,
});

export default rootReducer;
