import {connect} from 'react-redux';
import StepsForm from './steps_form';
import {selectAllSteps} from '../../reducers/selectors';
import {updateStep} from '../../actions/step_actions';

const mapStateToProps = (state, ownProps) => {
    let stepCount = selectAllSteps(state).length || 0;
    let stepId = parseInt(ownProps.match.params.step);
    const step = { heading: '', body: '', project_id: parseInt(ownProps.match.params.project_Id), order_number: stepCount + 1,imageFile: null };
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
