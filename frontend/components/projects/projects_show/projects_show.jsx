import React from 'react';
import { Link, Route } from 'react-router-dom';
import StepsIndexContainer from '../../steps/steps_index_container';

class ProjectShow extends React.Component {
constructor(props){
  super(props)
}

  componentDidMount(){
    const projectId = this.props.match.params.projectId
    this.props.fetchProject(this.props.match.params.projectId);
    this.props.fetchAllSteps(projectId);
  }

  render (){
    const project = this.props.project || {title: "", description: "", id: this.props.match.params.projectId}

  return (

    <div className="project-show">
      <div className="show-header">
      <div className="title">{project.title}</div>
      <div className="description">{project.description}</div>
      <div className="project-show-steps">
        <StepsIndexContainer/>
      </div>
    </div>
      <Link to={`/api/projects/${project.id}/steps`}>Add a Step</Link>
      <Link to={`/projects/${project.id}/edit/`}>Edit</Link>
      <br/>
      <Link to={"/"}>back to all projects</Link>
    </div>
  )
}
};

export default ProjectShow;
