import {FETCH_POSTS, SET_POSTS} from '../constants';
import {IPost, PostsActionTypes} from '../interfaces/posts';

export const initialState: IPost[] = [];

const postsReducer = (state: IPost[] = initialState, action: PostsActionTypes): IPost[] => {
  switch (action.type) {
    case FETCH_POSTS:
      return enrichPost(action.payload);
    case SET_POSTS:
      return action.payload;
    default:
      return state;
  }
}

const enrichPost = (posts: IPost[]): IPost[] => {
  return posts.map(post => {
    return {
      ...post,
      visible: true,
      image: `https://via.placeholder.com/1280x720/222222/FFFFFF/?text=${post.title.split(' ').join('+')}`,
      showComment: false
    }
  });
}

export default postsReducer;