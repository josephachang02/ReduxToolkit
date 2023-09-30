import { configureStore } from '@reduxjs/toolkit';
import stringReducer from './slices/string';

export const store = configureStore({
  reducer: {
    string: stringReducer,
  },
});