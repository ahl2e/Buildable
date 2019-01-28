import {connect} from 'react-redux';
import StepsIndex from './steps_index';
import { selectAllSteps } from '../../reducers/selectors';
import {deleteStep, fetchAllSteps} from '../../actions/step_actions';
import {withRouter} from 'react-router';

const mapStateToProps = (state, ownProps) =>{
  const steps= selectAllSteps(state);
  const currentUserId= state.entities.users;

  return {steps, currentUserId};
};

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (step) => dispatch(deleteStep(step)),
    fetchAllSteps: (projectId) => dispatch(fetchAllSteps(projectId))
  };
};


const StepsIndexContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(StepsIndex));
export default StepsIndexContainer;
