import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserList = createAsyncThunk(
  'users/FETCH_USERS',
  async () => await (await fetch('https://dummyjson.com/users')).json(),
);
