import { configureStore } from '@reduxjs/toolkit';
import users from './users/reducer';

export const store = configureStore({
  reducer: {
    users,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
