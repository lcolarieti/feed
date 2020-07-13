import { combineReducers } from 'redux';
import searchReducer from './search';
import usersReducer from './users';
import postsReducer from './posts';
import commentsReducer from './comments';
import loadingReducer from './loading';

const rootReducer = combineReducers({
  search: searchReducer,
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
  loading: loadingReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;