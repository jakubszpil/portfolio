import { configureStore } from '@reduxjs/toolkit';
import { navbarReducer } from '../features/navbar';

export const defaultStore = {
  reducer: {
    navbar: navbarReducer,
  },
};

export const store = configureStore(defaultStore);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
