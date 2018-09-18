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
  return(
    <li>
      <h3>Step{this.state.order_number}: {this.state.heading}</h3>
      <p>{this.state.body}</p>
      <button value="Delete Step" onClick={this.delete.bind(this)}>Delete</button>
    </li>
);
}
};

export default StepsIndexItem;
