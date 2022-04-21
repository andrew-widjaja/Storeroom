import { configureStore } from '@reduxjs/toolkit';
import displayReducer from '../components/containers/displaySlice';
import loginReducer from '../loginSlice';
import userReducer from '../components/containers/userSlice';
import filterReducer from '../components/Items/filterSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { itemsApi } from '../services/items';

export const store = configureStore({
  reducer: {
    display: displayReducer,
    login: loginReducer,
    user: userReducer,
    filter: filterReducer,
    [itemsApi.reducerPath]: itemsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(itemsApi.middleware),
});

setupListeners(store.dispatch);
