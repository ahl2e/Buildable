import React from 'react';
import StepsIndexItem from './steps_index_item';

class StepsIndex extends React.Component {
  constructor(props){
    super(props);
  }

render() {

  if (this.props.steps.length > 0){
    return this.props.steps.map((step,idx) => {
      return (
        <div>
          <ul className="steps-container">
            <StepsIndexItem key={step.id} stepNumber={idx+1} step={step} delete={this.props.delete} currentUserId = {this.props.currentUserId} />
          </ul>
        </div>
      )
    });
  } else {
    return null;
  }
}


}
export default StepsIndex;
