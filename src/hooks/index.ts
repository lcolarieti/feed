import {useState, useEffect} from 'react';
import { Post, User, Comment } from '../interfaces/index';

export const usePosts = (url: string) =>  {
  const [posts, setPosts] = useState<Array<Post>>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      setPosts((await response.json()).map((post: Post): Post => {
        return {
          ...post,
          visible: true,
          image: `https://via.placeholder.com/1280x720/222222/FFFFFF/?text=${post.title.split(' ').join('+')}`,
          showComment: false
        };
      }));
    })();
  }, [url]);

  return {posts, setPosts};
};


export const useUsers = (url: string)  =>  {
  const [users, setUsers] = useState<Array<User>>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      setUsers(await response.json());
    })();
  }, [url]);

  return users;
};


export const useComments = (url: string)  =>  {
  const [comments, setComments] = useState<Array<Comment>>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      setComments(await response.json());
    })();
  }, [url]);

  return comments;
}