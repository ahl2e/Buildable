import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './projects_form';
import { fetchProject, updateProject } from '../../actions/project_actions';
import LoadingIcon from './projects_show/loading_icon';


const mapStateToProps = (state, ownProps) => {
  const defaultProject = { title: '', description: '', user_id: state.session.id, imageFile: null };
  const user_id = state.session.id;
  const project = state.entities.projects[ownProps.match.params.projectId] || defaultProject;
  const formType = 'Update Project';
  const method = "PATCH";
  const errors = state.errors;
  const loading = state.ui.loading.detailLoading;

  return { project, formType, method, user_id, errors, loading };
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

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.project.id != nextProps.match.params.projectId) {
  //     this.props.fetchProject(nextProps.match.params.projectId);
  //   }
  // }

  render() {

    if(this.props.loading){
      return(<LoadingIcon/>)
    }
    const { action, formType, project, method, user_id, loading } = this.props;
    return (
      <ProjectForm
        action={action}
        formType={formType}
        project={project}
        method={method}
        userId={user_id}
        loading={loading}
         />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectForm);
