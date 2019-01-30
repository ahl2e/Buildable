import {connect} from 'react-redux';
import StepsIndexItem from './steps_index_item';
import {deleteStep} from '../../actions/step_actions';
import {withRouter} from 'react-router';

const mapStateToProps = (state, ownProps) => {
  const step = state.entities.steps[ownProps.step.id];
  const key = ownProps.stepNumber;
  return {step, key};
};

const mapDispatchToProps = dispatch => {
  return{
    deleteStep: step => dispatch(deleteStep(step))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepsIndexItem);
