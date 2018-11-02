import React from 'react';
import CommentsIndexItem from './comments_index_item';

class CommentsIndex extends React.Component{

  constructor(props){
    super(props);
  }

  render() {

    if (this.props.comments.length > 0){
      return this.props.comments.map((comment,idx) => {
          <div>
            <ul>
              <CommentsIndexItem key={idx} comment={comment} />
            </ul>
          </div>
      });
    } else {
      return null;
    }
  }
}

export default CommentsIndex;
