import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

interface UserAvatarAndNameProps {
  username: string | undefined;
}

const UserAvatarAndName: React.FC<UserAvatarAndNameProps> = ({ username}) => {

  return <div className="user-info">
    <div className="avatar">
      <FontAwesomeIcon icon={faUser} />
    </div>
    {username && (
      <p title={username}>
        @{username}
      </p>
    )}
  </div>;
}

export default UserAvatarAndName;