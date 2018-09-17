import {connect} from 'react-redux';
import StepsForm from './steps_form';
import {createStep} from '../../actions/step_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
    const step = { heading: '', body: '', project_id: parseInt(ownProps.match.params.projectId) };
    const formType  = "Add Step";

  return {step, formType};
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (step) => dispatch(createStep(step)),
  };
};

const CreateStepsFormContainer = connect(mapStateToProps, mapDispatchToProps)(StepsForm);

export default CreateStepsFormContainer;
