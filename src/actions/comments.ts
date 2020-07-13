import {Action, ActionCreator, Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {FETCH_COMMENTS} from '../constants';
import {action} from 'typesafe-actions';
import {CommentsState} from '../interfaces/comments';


export const fetchComments: ActionCreator<ThunkAction<Promise<Action>, CommentsState, void, any>> = (url: string) => {
  return async (dispatch: Dispatch): Promise<Action> => {
      return dispatch(
        action(FETCH_COMMENTS, (await (await fetch(url)).json()))
      );
  };
};