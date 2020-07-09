import React from 'react';
import { Comment } from '../interfaces';
import UserAvatarAndName from './UserAvatarAndName';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';


const Comments: React.FC<{items: Comment[], handleBackClick: React.ReactEventHandler}> = ({ items, handleBackClick }) => {

  const getCommentItem = (comment: Comment) => {
    return <li key={`${comment.postId}-${comment.id}`}>
      <UserAvatarAndName username={comment.name} />
      <p className="body">{comment.body}</p>
    </li>;
  };

  return (
    <div className="comments">
      <button className="back" onClick={(event: React.MouseEvent): void => {handleBackClick(event)}}>
        <FontAwesomeIcon icon={faArrowCircleLeft} />
      </button>
      <h3>Comments ({items.length})</h3>
      <ul>{items.map((comment: Comment) => getCommentItem(comment))}</ul>
    </div>
  );
}

export default Comments;