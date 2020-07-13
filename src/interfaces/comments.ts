import {FETCH_COMMENTS} from '../constants';

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface CommentsState {
  comments: IComment[];
}

interface setCommentsAction {
  type: typeof FETCH_COMMENTS;
  payload: IComment[];
}

export type CommentsActionTypes = setCommentsAction;