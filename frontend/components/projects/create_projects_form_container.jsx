import {connect} from 'react-redux';
import ProjectsForm from './projects_form';
import {createProject} from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
    const project = { title: '', description: '', user_id: state.session.id };
    const formType  = "Create Project";

  return {project, formType};
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (project) => dispatch(createProject(project)),
  };
};

const CreateProjectsFormContainer = connect(mapStateToProps, mapDispatchToProps)(ProjectsForm);

export default CreateProjectsFormContainer;
