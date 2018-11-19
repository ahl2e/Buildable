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

  toggleDropDown(e){
    $(`#step-edit-container-${e.target.id}`).toggleClass('step-no-show');
  }

  hideDropDown(e){
    $(`#step-edit-container-${e.target.id}`).addClass('step-no-show');
  }

  render() {

    // let deleteButton;
    // let editButton;
    let editContainer;
      if (Object.values(this.props.currentUserId).length > 0 && Object.values(this.props.currentUserId)[0].id == this.state.user.id){
        editContainer = <div>
                          <button onClick={this.toggleDropDown} id={`${this.state.id}`}>...</button>
                            <div
                              className='step-no-show'
                              id={`step-edit-container-${this.state.id}`}
                              onMouseLeave={this.hideDropDown}
                              >
                              <button value="Delete Step" className="delete-button" onClick={this.delete.bind(this)}>Delete Step</button>
                              <Link to={`/projects/${this.props.step.id}/${this.props.step}/edit`} id="step-edit">Edit Step</Link>
                          </div>
                        </div>
        // deleteButton = <button value="Delete Step" className="delete-button" onClick={this.delete.bind(this)}>Delete Step</button>;
        // editButton = <Link to={`/projects/${this.props.step.id}/${this.props.step}/edit`} id="step-edit">Edit Step</Link>
      }

    const pic = this.state.imageUrl ? <img src={this.state.imageUrl} /> : null;
    // const deleteButton = <button value="Delete Step" onClick={this.delete.bind(this)}>Delete</button>;
  return(
    <li>
      {pic}
      <h3>Step {this.state.order_number}: {this.state.heading}</h3>
      <p>{this.state.body}</p>
        {editContainer}
    </li>
);
}
};

export default StepsIndexItem;
