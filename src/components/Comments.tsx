import React from 'react';
import {IComment} from '../interfaces/comments';
import UserAvatarAndName from './UserAvatarAndName';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';


const Comments: React.FC<{items: IComment[], handleBackClick: React.ReactEventHandler}> = ({ items, handleBackClick }) => {

  const getCommentItem = (comment: IComment) => {
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
      <ul>{items.map((comment: IComment) => getCommentItem(comment))}</ul>
    </div>
  );
}

export default Comments;