import React from 'react';

class CommentsIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.state = props.comment;
    this.currentUser = props.currentUser;
    // this.delete = this.delete.bind(this);
  }

  // delete(e){
  //   this.props.delete(this.props.comment);
  // }

  render() {
    let deleteButton;
      if (Object.values(this.currentUser).length > 0 && Object.values(this.currentUser)[0].id == this.state.user_id){
        deleteButton = <button className="delete-button" onClick={() => this.props.delete(this.props.comment)}>Delete Your Comment</button>;
      }

    return(
      <li id='comment-item'>
        <div id='left-side'>
          <p id='comment-body'>{this.state.body}</p>
          <p>by:  {this.state.username}</p>
        </div>
        <div id='strong-side'>
          {deleteButton}
        </div>
      </li>
    );
}
};

export default CommentsIndexItem;
