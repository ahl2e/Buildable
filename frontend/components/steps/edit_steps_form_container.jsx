import {connect} from 'react-redux';
import StepsForm from './steps_form';
import {selectAllSteps} from '../../reducers/selectors';
import {updateStep} from '../../actions/step_actions';

const mapStateToProps = (state, ownProps) => {
    let stepId = parseInt(ownProps.match.params.step);
    const defaultStep = { heading: '', body: '', project_id: parseInt(ownProps.match.params.project_Id),imageFile: null };
    const step = state.entities.steps[ownProps.match.params.step] || defaultStep;
    const formType  = "Edit Step";
    const method = "GET";
    const errors = state.errors;

  return {step, formType, method, errors};
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (step,info) => dispatch(updateStep(step,info)),
  };
};

const EditStepsFormContainer = connect(mapStateToProps, mapDispatchToProps)(StepsForm);

export default EditStepsFormContainer;
