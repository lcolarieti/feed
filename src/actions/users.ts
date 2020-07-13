import {Action, ActionCreator, Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {UsersState} from '../interfaces/users';
import {FETCH_USERS} from '../constants';
import {action} from 'typesafe-actions';


export const fetchUsers: ActionCreator<ThunkAction<Promise<Action>, UsersState, void, any>> = (url: string) => {
  return async (dispatch: Dispatch): Promise<Action> => {
      return dispatch(
        action(FETCH_USERS, (await (await fetch(url)).json()))
      );
  };
};