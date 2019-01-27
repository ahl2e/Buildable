import React from 'react';
import StepsIndexItem from './steps_index_item';
import StepsIndexItemContainer from './steps_index_item_container';

class StepsIndex extends React.Component {
  constructor(props){
    super(props);
  }


render() {
  const sortedSteps = this.props.steps.sort(function(a, b) {
    return parseFloat(a.order_number) - parseFloat(b.order_number);
});

  var steps = sortedSteps.map((step,idx) => <StepsIndexItemContainer key={idx} stepNumber={idx+1} step={step} delete={this.props.delete} currentUserId = {this.props.currentUserId} className='step-item'/>);

  if (this.props.steps.length > 0){
    return (
      <div>
        <ul>
          {steps}
        </ul>
      </div>
    )
  } else {
    return null;
  }
}


}
export default StepsIndex;
