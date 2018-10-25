import React from 'react';
import CommentsIndexItem from './comment_index_item';

class CommentsIndex extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    <ul>
      {CommentsIndexItem}
    </ul>
  }
}
