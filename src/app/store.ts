import { configureStore } from '@reduxjs/toolkit';
import { navbarReducer } from '../features/navbar';
import { scrollbarReducer } from '../features/scrollbar';

export const defaultStore = {
  reducer: {
    navbar: navbarReducer,
    scrollbar: scrollbarReducer,
  },
};

export const store = configureStore(defaultStore);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
