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

  delete(e){
    localStorage.setItem('projects', []);
    this.props.deleteProject(this.props.project),this.props.history.push(`/`);
  }

  render (){
    const project = this.props.project || {title: "", description: "", id: this.props.match.params.projectId};
    const deleteButton = <button value="Delete" onClick={this.delete.bind(this)}>Delete</button>;

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
      <div className="main-image-container">
        {picture}
      </div>

      <h3>About: {project.title}</h3>
      <div className="description">{project.description}</div>
      <div>
        <StepsIndexContainer/>
      </div>
    </div>
    <div className="project-show-links">
      <Link to={`/projects/${project.id}/steps`}>Add a Step</Link>
      <br/>
      <Link to={`/projects/${project.id}/edit/`}>Edit</Link>
      {deleteButton}
      <br/>
      <Link to={"/"}>back to all projects</Link>
    </div>
    </div>
  )
}
};

export default ProjectShow;
