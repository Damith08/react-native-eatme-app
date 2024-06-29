import {combineReducers, configureStore} from '@reduxjs/toolkit';
import registerReducer from './slices/registerSlice'; // Make sure the path is correct

const rootReducer = combineReducers({
  register: registerReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
