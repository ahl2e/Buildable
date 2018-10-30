import React from 'react';
import CommentsIndexItem from './comments_index_item';

class CommentsIndex extends React.Component{

  constructor(props){
    super(props);
    // debugger
  }

  render(){
    if (this.props.comments){
      <ul>
        <CommentsIndexItem comments={this.props.comments}/>
      </ul>
    } else {
      return null;
    }
  }
}

export default CommentsIndex;
