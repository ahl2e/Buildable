import React from 'react';
import CommentsIndexItem from './comments_index_item';
// import CommentsIndexItemContainer from './comments_index_item_container';

class CommentsIndex extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      comments: props.comments,
      projectId: parseInt(props.match.params.projectId)
    };
  }

  componentDidMount(){
    const projectId = parseInt(this.props.match.params.projectId);
    this.props.fetchAllComments(projectId);
  }

  render() {

    var comments = this.props.comments.map((comment,idx) => <CommentsIndexItem key={idx} comment={comment} delete={this.props.deleteComment} currentUser={this.props.currentUserId}/> );
    if (this.props.comments.length > 0){
      return (
          <ul>
            {comments}
          </ul>
      )
    } else {
      return null;
    }
  }
}

export default CommentsIndex;
