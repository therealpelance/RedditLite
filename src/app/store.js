import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Example/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
