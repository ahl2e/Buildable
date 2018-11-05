import React from 'react';

const CommentsIndexItem = (comment) => {
  return(
    <li id='comment-item'>
      <p id='comment-title'>{comment.comment.title} by:  {comment.comment.username}</p>
      <p id='comment-body'>{comment.comment.body}</p>
    </li>
  )
};

export default CommentsIndexItem;
