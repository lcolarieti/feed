import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {IUser} from '../interfaces/users';

interface UserAvatarAndNameProps {
  username: string | undefined;
  user?: IUser | undefined;
}

const UserAvatarAndName: React.FC<UserAvatarAndNameProps> = ({ username, user }) => {

  return <div className="user-info">
    <div className="avatar">
      <FontAwesomeIcon icon={faUser} />
    </div>
    {username && (
      <p title={username}>
        {user ? <a href={`/user/${user.id}`} title={username}>@{username}</a> : username}
      </p>
    )}
  </div>;
}

export default UserAvatarAndName;