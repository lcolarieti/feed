import {FETCH_COMMENTS} from '../constants';
import {IComment, CommentsActionTypes} from '../interfaces/comments';

export const initialState: IComment[] = [];

const commentsReducer = (state: IComment[] = initialState, action: CommentsActionTypes): IComment[] => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return action.payload;
    default:
      return state;
  }
}

export default commentsReducer;