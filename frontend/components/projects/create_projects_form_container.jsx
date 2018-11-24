import {connect} from 'react-redux';
import ProjectsForm from './projects_form';
import {createProject} from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
    const project = { title: '', description: '', user_id: state.session.id, imageFile: null };
    const formType  = "Create Project";
    const method = "POST";
    const errors = state.errors;

  return {project, formType, method, errors};
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (project) => dispatch(createProject(project)),
  };
};

const CreateProjectsFormContainer = connect(mapStateToProps, mapDispatchToProps)(ProjectsForm);

export default CreateProjectsFormContainer;
