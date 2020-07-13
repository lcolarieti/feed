import {Action, ActionCreator, Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {SET_POSTS, FETCH_POSTS} from '../constants';
import {action} from 'typesafe-actions';
import {IPost, PostsState} from '../interfaces/posts';


export const fetchPosts: ActionCreator<ThunkAction<Promise<Action>, PostsState, void, any>> = (url: string) => {
  return async (dispatch: Dispatch): Promise<Action> => {
      return dispatch(
        action(FETCH_POSTS, (await (await fetch(url)).json()))
      );
  };
};

export const setPosts = (posts: IPost[]) => action(SET_POSTS, posts);