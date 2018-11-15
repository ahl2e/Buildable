import React from 'react';
import CommentsIndexItem from './comments_index_item';

class CommentsIndex extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      comments: props.comments,
      projectId: parseInt(props.match.params.project_Id)
    };
  }

  componentDidMount(){
    const projectId = parseInt(this.props.match.params.project_Id);
    this.props.fetchAllComments(projectId);
  }

  render() {
    if (this.props.comments.length > 0){
      return this.props.comments.map((comment,idx) => {
        return (
          <div>
            <ul>
              <CommentsIndexItem key={idx} comment={comment} delete={this.props.deleteComment} currentUser={this.props.currentUserId}/>
            </ul>
          </div>
        )
      });
    } else {
      return null;
    }
  }
}

export default CommentsIndex;
