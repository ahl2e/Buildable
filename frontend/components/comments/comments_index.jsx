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

  componentWillUpdate(nextProps){
    if(this.props.comments.length !== nextProps.comments.length){
      this.setState({comments: nextProps.comments})
    }
  }

//   componentWillUpdate(nextProps) {
//     debugger
//   if (this.props.comments.length !== nextProps.comments.length) {
//     this.props.fetchAllComments(this.state.projectId);
//   }
// }

  render() {
    if (this.state.comments.length > 0){
      return this.state.comments.map((comment,idx) => {
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
