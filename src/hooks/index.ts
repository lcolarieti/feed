import { useState, useEffect } from 'react';
import { Album, User } from '../interfaces';

export const useAlbums = (url: string)  =>  {
  const [albums, setAlbums] = useState<Array<Album>>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      setAlbums(await response.json());
    })();
  }, [url]);

  return albums;
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
