import React from 'react';
import { Link, Route } from 'react-router-dom';
import StepsIndexContainer from '../../steps/steps_index_container';
import CommentsIndexContainer from '../../comments/comments_index_container';
import CreateCommentsFormContainer from '../../comments/create_comments_form_container';

class ProjectShow extends React.Component {
constructor(props){
  super(props)
}

  componentDidMount(){
    const projectId = parseInt(this.props.match.params.projectId);
    this.props.fetchProject(this.props.match.params.projectId);
    this.props.fetchAllSteps(projectId);
    this.props.fetchAllComments(projectId);
  }

  delete(e){
    localStorage.setItem('projects', []);
    this.props.deleteProject(this.props.project),this.props.history.push(`/`);
  }

  render (){
    const project = this.props.project || {title: "", description: "", id: this.props.match.params.projectId};
    let deleteButton;
    let editLink;
    let addLink;
    if (project.project){
      if(this.props.user === project.project.username){
         deleteButton = <button value="Delete" onClick={this.delete.bind(this)}>Delete</button>;
         editLink = <Link to={`/projects/${project.id}/edit/`}>Edit</Link>;
         addLink = <Link to={`/projects/${project.id}/steps`}>Add a Step</Link>;
      }
    }

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
              <Link to={`/projects/${project.id}/comment`} id="comment-form-link">Comment on this project</Link>
            </div>
            <CreateCommentsFormContainer/>
            <CommentsIndexContainer/>
          </div>
      <div className="project-show-links">
        <Link to={"/"} id="all-projects">back to all projects </Link>
        <Link to={`/projects/${project.id}/comments`} id="comment-read-link">See all comments</Link>
        <br/>
      </div>
      <div className="edit-container">
        {addLink}
        <br/>
        {editLink}
        <br/>
        {deleteButton}
      </div>
    </div>
  )
}
};

export default ProjectShow;
