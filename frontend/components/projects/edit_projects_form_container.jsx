import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './projects_form';
import { fetchProject, updateProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  const defaultProject = { title: '', description: '', user_id: state.session.id, imageFile: null };
  const user_id = state.session.id;
  const project = state.entities.projects[ownProps.match.params.projectId] || defaultProject;
  const formType = 'Update Project';
  const method = "PATCH";
  return { project, formType, method, user_id };
};

const mapDispatchToProps = dispatch => {
  return {
    action: (project) => dispatch(updateProject(project)),
    fetchProject: (id) => dispatch(fetchProject(id)),
  };
};

class EditProjectForm extends React.Component {
  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.project.id != nextProps.match.params.projectId) {
      this.props.fetchProject(nextProps.match.params.projectId);
    }
  }

  render() {
    const { action, formType, project, method, user_id } = this.props;
    return (
      <ProjectForm
        action={action}
        formType={formType}
        project={project}
        method={method}
        userId={user_id}
         />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectForm);
