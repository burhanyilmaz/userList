import { createReducer } from '@reduxjs/toolkit';
import { addUser, removeUser, resetUsers, selectUser } from './actions';
import { fetchUserList } from './thunk';
import { User, UsersState } from './types';

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
    .addCase(addUser, (state, { payload }) => ({
      ...state,
      users: [
        {
          image: payload,
          username: 'Anonymous',
          id: state.users.length + 1,
          age: state.users.length + 1,
        } as User,
        ...state.users,
      ],
    }))
    .addCase(resetUsers, () => initialState),
);

export default users;
