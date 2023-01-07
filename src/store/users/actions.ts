import { createAction } from '@reduxjs/toolkit';
import { User } from './types';

export const resetUsers = createAction<void>('users/RESET_USERS');
export const removeUser = createAction<number>('users/REMOVE_USER');
export const selectUser = createAction<User>('users/SELECT_USER');
