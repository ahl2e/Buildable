import React from 'react';

class CommentsIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.state = props.comment;
    this.currentUser = props.currentUser;
  }

  delete(e){
    debugger
    this.props.delete(this.state.id);
  }

  render() {
    let deleteButton;
      if (Object.values(this.currentUser).length > 0 && Object.values(this.currentUser)[0].id == this.state.user_id){
        deleteButton = <button className="delete-button" onClick={this.delete.bind(this)}>Delete Comment</button>;
      }

    return(
      <li id='comment-item'>
        <p id='comment-title'>{this.state.title} by:  {this.state.username}</p>
        <p id='comment-body'>{this.state.body}</p>
        {deleteButton}
      </li>
    );
}
};

export default CommentsIndexItem;
