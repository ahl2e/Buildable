import {connect} from 'react-redux';
import StepsForm from './steps_form';
import {createStep} from '../../actions/step_actions';

const mapStateToProps = (state, ownProps) => {
    const project = { title: '', description: '', user_id: state.session.id };
    const formType  = "Add Step";

  return {project, formType};
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (project) => dispatch(createProject(project)),
  };
};

const CreateStepsFormContainer = connect(mapStateToProps, mapDispatchToProps)(StepsForm);

export default CreateStepsFormContainer;
