import React from 'react';

const CommentsIndexItem = (props) => (
    props.comments.map((comment, idx) => <li key={idx}> {comment.body}</li>);
)

export CommentsIndexItem;
