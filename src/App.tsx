import React, {useEffect} from 'react';
import Loading from './components/Loading';
import Header from './components/Header';
import {ConnectedProps} from 'react-redux';
import './App.scss';
import { connect } from 'react-redux';
import {IPost} from './interfaces/posts';
import {ILoading} from './interfaces/loading';
import {fetchUsers} from './actions/users';
import {fetchPosts, setPosts} from './actions/posts';
import {fetchComments} from './actions/comments';
import {setLoading} from './actions/loading';
import Card from './components/Card';
import {RootState} from './reducers/combineReducers';
import GridMessage from './components/GridMessage';
import Footer from './components/Footer';


const mapStateToProps = (state: RootState) => ({
  search: state.search,
  users: state.users,
  posts: state.posts,
  comments: state.comments,
  loading: state.loading.active
});

const mapDispatchToProps = {
  fetchUsersAction: (url: string) => fetchUsers(url),
  fetchPostsAction: (url: string) => fetchPosts(url),
  fetchCommentsAction: (url: string) => fetchComments(url),
  setLoadingAction: (loading: ILoading) => setLoading(loading),
  setPostsAction: (posts: IPost[]) => setPosts(posts),
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux;


const App: React.FC<Props> = (props: Props) => {
  const {users, posts, comments, loading, search} = props;

  useEffect(() => {
    props.fetchUsersAction('https://jsonplaceholder.typicode.com/users');
    props.fetchPostsAction('https://jsonplaceholder.typicode.com/posts');
    props.fetchCommentsAction('https://jsonplaceholder.typicode.com/comments');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    (
      loading &&
      posts.length > 0 &&
      users.length > 0 &&
      comments.length > 0
    ) && props.setLoadingAction({active: false});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props])

  useEffect(() => {
    searchFilter()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const visiblePosts = (condition: Function): IPost[] => {
    return posts.map(post => {
      return {
        ...post,
        visible: condition(post)
      };
    });
  }

  const searchFilter = (): void => {
    let filteredPosts = posts;
    switch (search.type) {
      case 'user':
        const filteredUsers = users.filter(user => (
          user.name.toLowerCase().includes(search.text.toLowerCase()) ||
          user.username.toLowerCase().includes(search.text.toLowerCase())
        ));
        filteredPosts = visiblePosts((post: IPost) => filteredUsers.filter(user => user.id === post.userId).length > 0)
        break;
      case 'content':
        filteredPosts = visiblePosts((post: IPost) => (post.title.toLowerCase().includes(search.text.toLowerCase()) || post.body.toLowerCase().includes(search.text.toLowerCase())));
        break;
    }

    props.setPostsAction(filteredPosts);
  };

  return (
    <>
      {loading && <Loading />}
      <Header />
      <div className="main-content">
        <div className="grid">
          {[
            posts.filter(post => post.visible).map((post: IPost) => <Card key={post.id} post={post} />),
            (posts.filter(post => post.visible).length === 0 && !loading) && <GridMessage key="grid-message" searchMode={search.text !== ''} />
          ]}
        </div>
      </div>
      <Footer count={posts.filter(post => post.visible).length} />
    </>
  );
}

export default connector(App);
