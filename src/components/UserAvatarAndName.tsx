import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const UserAvatarAndName: React.FC<{username: string | undefined}> = ({ username }) => {

  return <div className="user-info">
    <div className="avatar">
      <FontAwesomeIcon icon={faUser} />
    </div>
    {username && <p title={username}>{username}</p>}
  </div>;
}

export default UserAvatarAndName;