import {FETCH_POSTS} from '../constants';

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  image: string;
  showComment: boolean;
  visible: boolean;
}

export interface PostsState {
  posts: IPost[];
}

interface setPostsAction {
  type: typeof FETCH_POSTS;
  payload: IPost[];
}

export type PostsActionTypes = setPostsAction;