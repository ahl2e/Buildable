import {connect} from 'react-redux';
import StepsForm from './steps_form';
import {selectAllSteps} from '../../reducers/selectors';
import {createStep} from '../../actions/step_actions';

const mapStateToProps = (state, ownProps) => {
    let stepCount = selectAllSteps(state).length || 0;
    const step = { heading: '', body: '', project_id: parseInt(ownProps.match.params.project_Id), order_number: stepCount + 1,imageFile: null };
    const formType  = "Add Step";
    const method = "POST";
    const errors = state.errors;

  return {step, formType, method, errors};
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (step) => dispatch(createStep(step)),
  };
};

const CreateStepsFormContainer = connect(mapStateToProps, mapDispatchToProps)(StepsForm);

export default CreateStepsFormContainer;
