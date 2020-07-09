import React, {useEffect, useReducer, useState} from 'react';
import {usePosts, useUsers, useComments} from './hooks';
import { Post, Comment } from './interfaces';
import {SearchState} from './interfaces/search';
import Comments from './components/Comments';
import UserAvatarAndName from './components/UserAvatarAndName';
import Loading from './components/Loading';
import Header from './components/Header';
import {useSelector} from 'react-redux';
import './App.scss';
import searchReducer, {initialState} from './reducers/search';


const App: React.FC = () => {

  const {posts, setPosts} = usePosts('https://jsonplaceholder.typicode.com/posts');
  const users = useUsers('https://jsonplaceholder.typicode.com/users');
  const comments = useComments('https://jsonplaceholder.typicode.com/comments');
  const {search} = useSelector((state: SearchState) => state);

  const [loading, setLoading] = useState<boolean>(true);

  const toggleComments = (event: React.MouseEvent, comments: Array<Comment>, postId: number): void => {
    event && event.preventDefault();
    setPosts(posts.map(post => (post.id === postId ? {...post, showComment: !post.showComment} : post)));
  };

  const getGridItem = (item: Post, i: number) => {
    const username = users.find(user => user.id === item.userId)?.name;
    const postComments = comments.filter((comment) => item.id === comment.postId);

    loading && setTimeout(() => setLoading(false), 1500);

    return (
      <div
        key={item.id}
        id={`post-${item.id}`}
        className={`grid-item ${(!item.visible ? 'hide' : '')}`}>
        <div className="header">
          <UserAvatarAndName username={username} />
        </div>
        <div className="content">
          <h3>{item.title}</h3>
          <div className="image-wrap">
            {item.image && <img src={item.image} alt={item.title}/>}
          </div>
          <p>{item.body}</p>
        </div>
        <div className="footer">
          <p>
            <span
              className={postComments.length > 0 ? 'link' : ''}
              onClick={(event: React.MouseEvent) => {toggleComments(event, postComments, item.id)}}
            >
              Comments
            </span>
            &nbsp;(<strong>{postComments.length}</strong>)
          </p>
        </div>
        {item.showComment && <Comments
          handleBackClick={(event: React.MouseEvent): void => {toggleComments(event, postComments, item.id)}}
          items={postComments}
        />}
      </div>
    );
  };

  return (
    <>
      {loading && <Loading />}
      <Header />
      {search.text}
      <div className="main-content">
        <div className="grid">
          {posts.map((post: Post, i: number) => getGridItem(post, i))}
        </div>
      </div>
    </>
  );
}

export default App;
