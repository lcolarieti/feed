import React from 'react';
import { useAlbums, useUsers } from './hooks';
import { Album, User } from './interfaces';
import './App.scss';

export const App = () => {

  //const albums = useAlbums('https://jsonplaceholder.typicode.com/albums');
  //const users = useUsers('https://jsonplaceholder.typicode.com/users');

  let albums: Array<Album>[];
  let users: Array<User>[];
  
  (async () => {const [albums, users] = await Promise.all([
    useAlbums('https://jsonplaceholder.typicode.com/albums'),
    useUsers('https://jsonplaceholder.typicode.com/users')
  ])})();

  const getGridItem = (item: Album) => {
    const user = users.find(user => user.id === item.userId)?.name;
    return (
      <div
        key={item.id}
        className="grid-item">
        <p>{item.title}</p>
        {user && <p>{user}</p>}
      </div>
    );
  };



  return (
    <>
      <div className="grid">
        {albums.map((album) => getGridItem(album))}
      </div>
    </>
  );
}

export default App;
