import React from 'react';
import { connect } from 'react-redux';
import ProjectForm from './projects_form';
import { fetchProject, updateProject } from '../../actions/project_actions';
import { fetchAllSteps, updateStep } from '../../actions/step_actions';
import { selectAllSteps } from '../../reducers/selectors';
import LoadingIcon from './projects_show/loading_icon';
import EditStepsFormContainer from '../steps/edit_steps_form_container';


const mapStateToProps = (state, ownProps) => {
  const defaultProject = { title: '', description: '', user_id: state.session.id, imageFile: null };
  const user_id = state.session.id;
  const project = state.entities.projects[ownProps.match.params.projectId] || defaultProject;
  const formType = 'Update Project';
  const method = "PATCH";
  const errors = state.errors;
  const loading = state.ui.loading.detailLoading;
  const steps= selectAllSteps(state);

  return { project, formType, method, user_id, errors, loading, steps };
};

const mapDispatchToProps = dispatch => {
  return {
    action: (project) => dispatch(updateProject(project)),
    fetchProject: (id) => dispatch(fetchProject(id)),
    fetchAllSteps: (id) => dispatch(fetchAllSteps(id)),
  };
};

class EditProjectForm extends React.Component {
  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
    // this.props.fetchAllSteps(this.props.match.params.projectId);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.project.id != nextProps.match.params.projectId) {
  //     this.props.fetchProject(nextProps.match.params.projectId);
  //   }
  // }



// here we go

updateStepField(field,idx){
  return (e) => {
    const newSteps = this.state.steps;
    newSteps[idx][field] = e.target.value;
    this.setState({steps: newSteps});
  };
}
updateStepQuillField(field,idx){
  return (e) => {
    const newSteps = this.state.steps;
    newSteps[idx][field] = e;
    this.setState({steps: newSteps});
  };
}


  renderSteps(){
  }

  render() {
    if(this.props.loading){
      return(<LoadingIcon/>)
    }

    // if(this.props.steps.length > 0){
    //   var steps = this.props.steps.map((step,idx) => <EditStepsFormContainer step={step}/>);
    // }
    const { action, formType, project, method, user_id, loading } = this.props;
    debugger
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
    {steps}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectForm);
