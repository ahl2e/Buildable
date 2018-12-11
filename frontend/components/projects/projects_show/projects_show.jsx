import React from 'react';
import { Link, Route } from 'react-router-dom';
import StepsIndexContainer from '../../steps/steps_index_container';
import CommentsIndexContainer from '../../comments/comments_index_container';
import CreateCommentsFormContainer from '../../comments/create_comments_form_container';

class ProjectShow extends React.Component {
constructor(props){
  super(props);
}

  componentDidMount(){
    window.scrollTo(0,0);
    const projectId = parseInt(this.props.match.params.projectId);
    this.props.fetchProject(this.props.match.params.projectId);
    this.props.fetchAllSteps(projectId);
    this.props.fetchAllComments(projectId);
  }

  componentWillUpdate(){
    const projectId = parseInt(this.props.match.params.projectId);
    this.props.fetchAllSteps(projectId);
    this.props.fetchAllComments(projectId);
  }

  // componentWillReceiveProps(){
  //   const projectId = parseInt(this.props.match.params.projectId);
  //   this.props.fetchAllSteps(projectId);
  //   location.reload();
  // }

  delete(e){
    localStorage.clear();
    this.props.deleteProject(this.props.project).then(this.props.history.push(`/`)).then(localStorage.clear()).then(location.reload());
  }

  render (){
    const project = this.props.project || {title: "", description: "", id: this.props.match.params.projectId};
    let deleteButton;
    let editLink;
    let addLink;
    if (project.project){
      if(this.props.user === project.project.username){
         deleteButton = <button value="Delete" onClick={this.delete.bind(this)}>Delete This Project</button>;
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

  let commentForm;
  if (this.props.user){
    commentForm = <CreateCommentsFormContainer/>;
  } else {
    commentForm = <Link id="comment-sign-in" to ="/login">Sign In to Leave a Comment</Link>;
  }

let username;
  if (project.project){
    username = project.project.username;
  }
let category;
  if (project.project && project.project.category != null){
    // category = <p>category: {project.project.category}</p>;
    category = <Link
      to={`/categories/${project.project.category}`}
      className='show-category-link'>in: {project.project.category}</Link>
  }

  return (

    <div className="project-show">
        <div className="show-header">
        <div className="title">{project.title}</div>
        <p className="author"> by: {username}</p>
        {category}
          <div className="main-image-container">
            {picture}
          </div>

        <h3>About: {project.title}</h3>
          <div className="description">{project.description}</div>
            <div>
              <StepsIndexContainer/>
            </div>
            <div className="edit-container">
              {addLink}
              <br/>
              {editLink}
              <br/>
              {deleteButton}
            </div>
            {commentForm}
            <CommentsIndexContainer/>
            <br/>
          </div>
      <div className="project-show-links">
        <Link to={"/"} id="all-projects">back to all projects </Link>
        <br/>
      </div>
    </div>
  )
}
};

export default ProjectShow;
