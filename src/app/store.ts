import { configureStore } from '@reduxjs/toolkit';

export const defaultStore = {
  reducer: {},
};

export const store = configureStore(defaultStore);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
