import React from 'react';
import { Link, Route } from 'react-router-dom';
import StepsIndexContainer from '../../steps/steps_index_container';
import CommentsIndexContainer from '../../comments/comments_index_container';
import CreateCommentsFormContainer from '../../comments/create_comments_form_container';
import LoadingIcon from './loading_icon';

class ProjectShow extends React.Component {
constructor(props){
  super(props);
}


  componentDidMount(){
    window.scrollTo(0,0);
    const projectId = parseInt(this.props.match.params.projectId);
    this.props.fetchProject(this.props.match.params.projectId);
    this.props.fetchAllSteps(projectId);
  }


  delete(e){
    sessionStorage.clear();
    this.props.deleteProject(this.props.project).then(this.props.history.push(`/`)).then(sessionStorage.clear()).then(location.reload());;
  }

  toggleDropDown(e){
    $("#project-edit-container").toggleClass("project-no-show");
    $(".project-edit-drop").toggleClass("project-no-show");
  }

  hideDropDown(e){
    $("#project-edit-container").addClass("project-no-show");
    $(".project-edit-drop").toggleClass("project-no-show");
  }

  renderEditContainer(){
    const project = this.props.project || {title: "", description: "", id: this.props.match.params.projectId};
    if(project.project){
      if(this.props.user === project.project.username){
        return(
          <div>
            <button onClick={this.toggleDropDown}  className='project-edit-drop'>Project Options</button>
            <div
              id="project-edit-container"
              className="project-no-show"
              onMouseLeave={this.hideDropDown}
              >
                <Link to={`/projects/${project.id}/steps`}>Add a Step</Link>
                <button value="Delete" onClick={this.delete.bind(this)}>Delete This Project</button>
            </div>
        </div>
        )
      }
    }
  }

  renderCategory(){
    if (this.props.project && this.props.project.project && this.props.project.project.category){
      return (
        <Link to={`/categories/${this.props.project.project.category}/`}>in: {this.props.project.project.category}</Link>
      );
    }else{
      return null;
    }
  }

  backToIndex(e){
    setTimeout(window.scrollTo(0,825),0);
    this.props.history.push('/');
  }

  revealNewProject(){
    this.props.revealProject();
    location.reload();
  }

  render (){
    if (this.props.loading.detailLoading){
      return <LoadingIcon/>;
    }

    if (this.props.building.justBuilt){
      return (
        <div id='project-thanks'>
          <div id='thanks-box'>
            <h1>Thanks for Adding your Project to Buidable</h1>
            <button onClick={this.revealNewProject.bind(this)}>Click Here to See Your Project</button>
        </div>
        </div>
      )}

    const project = this.props.project || {title: "", description: "", id: this.props.match.params.projectId};

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
        {this.renderCategory()}
          <div className="main-image-container">
            {picture}
          </div>

            <div>
              <StepsIndexContainer/>
            </div>
            {this.renderEditContainer()}

            {commentForm}
            <CommentsIndexContainer/>
            <br/>
          </div>
      <div className="project-show-links">
        <button id='back-button' onClick={this.backToIndex.bind(this)}>back to all projects</button>
        <br/>
      </div>
    </div>
  )
}
};

export default ProjectShow;
