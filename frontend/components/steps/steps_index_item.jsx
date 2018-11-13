import React from 'react';
import { Link } from 'react-router-dom';

class StepsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.step;
  }

  delete(e){
    this.props.delete(this.props.step);
  }


  render() {
    let deleteButton;
      if (this.props.currentUserId && Object.values(this.props.currentUserId)[0].id == this.state.user.id){
        deleteButton = <button value="Delete Step" className="delete-button" onClick={this.delete.bind(this)}>Delete Step</button>;
      }

    const pic = this.state.imageUrl ? <img src={this.state.imageUrl} /> : null;
    // const deleteButton = <button value="Delete Step" onClick={this.delete.bind(this)}>Delete</button>;
  return(
    <li>
      {pic}
      <h3>Step {this.state.order_number}: {this.state.heading}</h3>
      <p>{this.state.body}</p>
      {deleteButton}
    </li>
);
}
};

export default StepsIndexItem;
