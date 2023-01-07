import { createAction } from '@reduxjs/toolkit';

export const resetUsers = createAction<void>('users/RESET_USERS');
export const removeUser = createAction<number>('users/REMOVE_USER');
