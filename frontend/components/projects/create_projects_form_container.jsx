import {connect} from 'react-redux';
import ProjectsForm from './projects_form';
import {createProject, receiveProject} from '../../actions/project_actions';
import {createStep} from '../../actions/step_actions';

const mapStateToProps = (state, ownProps) => {
    const project = { title: '', description: '', category: '', user_id: state.session.id, imageFile: null };
    const formType  = "Publish Project";
    const method = "POST";
    const errors = state.errors;
    const loading = state.ui.loading.detailLoading;

  return {project, formType, method, errors, loading};
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (project) => dispatch(createProject(project)),
    receive: (project) => dispatch(receiveProject(project)),
    createStep: (step) => dispatch(createStep(step)),
  };
};

const CreateProjectsFormContainer = connect(mapStateToProps, mapDispatchToProps)(ProjectsForm);

export default CreateProjectsFormContainer;
