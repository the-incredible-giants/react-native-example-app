import { configureStore } from '@reduxjs/toolkit';
import retailersSlice, { retailersApi } from './slices/retailersSlice';

const store = configureStore({
  reducer: {
    retailersSlice,
    [retailersApi.reducerPath]: retailersApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(retailersApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
