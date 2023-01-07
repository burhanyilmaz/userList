import { RootState } from 'store';
import { User } from './types';

type UsersRootState = Pick<RootState, 'users'>;

export const userListSelector = (state: UsersRootState): User[] => state.users.users;
export const selectedUserSelector = (state: UsersRootState): User | undefined =>
  state.users.selectedUser;
