import {combineReducers} from '@reduxjs/toolkit';
import registerReducer from '../store/slices/registerSlice';

const rootReducer = combineReducers({
  register: registerReducer,
});

export default rootReducer;
