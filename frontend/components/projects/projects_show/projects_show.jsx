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

    let picture;
    if (project.project){
      if(project.project.imageUrl){
        picture = <img src={`${project.project.imageUrl}`} />;
      }
  }

  return (

    <div className="project-show">
      <div className="show-header">
      <div className="title">{project.title}</div>
      <div className="description">{project.description}</div>
      <div>
        <div className="main-image-container">
          {picture}
        </div>
        <StepsIndexContainer/>
      </div>
    </div>
    <div className="project-show-links">
      <Link to={`/api/projects/${project.id}/steps`}>Add a Step</Link>
      <br/>
      <Link to={`/projects/${project.id}/edit/`}>Edit</Link>
      <br/>
      <Link to={"/"}>back to all projects</Link>
    </div>
    </div>
  )
}
};

export default ProjectShow;
