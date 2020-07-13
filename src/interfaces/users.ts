import {FETCH_USERS} from '../constants';

export interface IUser {
  readonly id: number;
  readonly name: string;
  readonly username: string;
  readonly email: string;
}

export interface UsersState {
  users: IUser[];
}

interface setUsersAction {
  type: typeof FETCH_USERS;
  payload: IUser[];
}

export type UsersActionTypes = setUsersAction;