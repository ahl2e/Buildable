import {connect} from 'react-redux';
import StepsForm from './steps_form';
import {selectAllSteps} from '../../reducers/selectors';
import {updateStep} from '../../actions/step_actions';

const mapStateToProps = (state, ownProps) => {
    let stepId = parseInt(ownProps.match.params.step);
    const defaultStep = { heading: '', body: '', project_id: parseInt(ownProps.match.params.project_Id),imageFile: null };
    const step = state.entities.steps[ownProps.match.params.project_Id] || defaultStep;
    const formType  = "Edit Step";
    const method = "GET";

  return {step, formType, method};
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (step) => dispatch(updateStep(step)),
  };
};

const EditStepsFormContainer = connect(mapStateToProps, mapDispatchToProps)(StepsForm);

export default EditStepsFormContainer;
