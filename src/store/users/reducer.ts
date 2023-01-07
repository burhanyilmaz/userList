import { createReducer } from '@reduxjs/toolkit';
import { removeUser, resetUsers, selectUser } from './actions';
import { fetchUserList } from './thunk';
import { UsersState } from './types';

export const initialState: UsersState = {
  users: [],
};

const users = createReducer(initialState, builder =>
  builder
    .addCase(fetchUserList.fulfilled, (state, { payload }) => ({
      ...state,
      users: payload.users,
    }))
    .addCase(removeUser, (state, { payload }) => {
      const newUserList = state.users.filter(user => user.id !== payload);

      return { ...state, users: newUserList };
    })
    .addCase(selectUser, (state, { payload }) => ({ ...state, selectedUser: payload }))
    .addCase(resetUsers, () => initialState),
);

export default users;
