import React from 'react';
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
import {RootState} from './reducers/combineReducers';
import Footer from './components/Footer';
import Grid from './components/Grid';
import {CombinedState} from 'redux';


const mapStateToProps = (state: CombinedState<RootState>) => ({
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
  const {posts, loading} = props;

  return (
    <>
      {loading && <Loading />}
      <Header />
      <Grid />
      <Footer count={posts.filter(post => post.visible).length} />
    </>
  );
}

export default connector(App);
