import { configureStore } from '@reduxjs/toolkit';
import displayReducer from '../components/containers/displaySlice';

export const store = configureStore({
  reducer: {
    counter: displayReducer,
  },
});
