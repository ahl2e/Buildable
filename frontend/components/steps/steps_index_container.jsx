import {connect} from 'react-redux';
import StepsIndex from './steps_index';
import { selectAllSteps } from '../../reducers/selectors';
import {deleteStep} from '../../actions/step_actions';
import {withRouter} from 'react-router';

const mapStateToProps = (state, ownProps) =>{
  return {
    steps: selectAllSteps(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (step) => dispatch(deleteStep(step)),
  };
};


const StepsIndexContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(StepsIndex));
export default StepsIndexContainer;