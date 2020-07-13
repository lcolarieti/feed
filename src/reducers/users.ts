import {FETCH_USERS} from '../constants';
import {IUser, UsersActionTypes} from '../interfaces/users';

export const initialState: IUser[] = [];

const usersReducer = (state: IUser[] = initialState, action: UsersActionTypes): IUser[] => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload;
    default:
      return state;
  }
}

export default usersReducer;