import { configureStore } from '@reduxjs/toolkit';
import displayReducer from '../components/containers/displaySlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { itemsApi } from '../services/items';

export const store = configureStore({
  reducer: {
    display: displayReducer,
    [itemsApi.reducerPath]: itemsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(itemsApi.middleware),
});

setupListeners(store.dispatch);
