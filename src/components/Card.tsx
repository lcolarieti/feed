import React from 'react';
import UserAvatarAndName from './UserAvatarAndName';
import Comments from './Comments';
import {IUser} from '../interfaces/users';
import {IComment} from '../interfaces/comments';
import {IPost} from '../interfaces/posts';
import {RootState} from '../reducers/combineReducers';
import {connect, ConnectedProps} from 'react-redux';
import {setPosts} from '../actions/posts';


const mapStateToProps = (state: RootState) => ({
  users: state.users,
  comments: state.comments,
  posts: state.posts
});

const mapDispatchToProps = {
  setPostsAction: (posts: IPost[]) => setPosts(posts),
};

interface StateProps {
  users: IUser[];
  comments: IComment[];
  posts: IPost[];
  setPostsAction: any;
};

type PropsFromRedux = StateProps & ReceivedProps & ConnectedProps<typeof connector>
type Props = PropsFromRedux;

type ReceivedProps = {
  post: IPost
};

const connector = connect(mapStateToProps, mapDispatchToProps);

const Card: React.FC<Props> = (props: Props) => {
  const {comments, users, post, setPostsAction, posts} = props;
  const username: string | undefined = (users.find((user: IUser) => user.id === post.userId))?.username;
  const user: IUser | undefined = (users.find((user: IUser) => user.id === post.userId));
  const postComments = comments.filter((comment: IComment) => post.id === comment.postId);

  const toggleComments = (event: React.MouseEvent, comments: Array<IComment>, postId: number): void => {
    event && event.preventDefault();
    setPostsAction(posts.map((post: IPost) => (post.id === postId ? {...post, showComment: !post.showComment} : post)));
  };

  return (
    <div
      key={post.id}
      id={`post-${post.id}`}
      className="grid-item">
      <div className="header">
        <UserAvatarAndName username={username} user={user} />
      </div>
      <div className="content">
        <h3>{post.title}</h3>
        <div className="image-wrap">
          {post.image && <img src={post.image} alt={post.title}/>}
        </div>
        <p>{post.body}</p>
      </div>
      <div className="footer">
        <p>
            <span
              className={postComments.length > 0 ? 'link' : ''}
              onClick={(event: React.MouseEvent) => {toggleComments(event, postComments, post.id)}}
            >
              Comments
            </span>
          &nbsp;(<strong>{postComments.length}</strong>)
        </p>
      </div>
      {post.showComment && <Comments
        handleBackClick={(event: React.MouseEvent): void => {toggleComments(event, postComments, post.id)}}
        items={postComments}
      />}
    </div>
  );
};

export default connector(Card);

