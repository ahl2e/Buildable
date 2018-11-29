import React from 'react';
import {merge} from 'lodash';
import { withRouter, Redirect} from 'react-router-dom';

class ProjectsForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      project: props.project,
      steps: [],
      image: {imageFile: null, imageUrl: "" }
    };
    this.state.project.userId = this.props.userId;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    window.scrollTo(0,0);
  }

  // update(field){
  // 		return (e) => {
  // 			this.setState({project: {[field]: e.target.value} });
  // 		}
  // 	}

    updateProjectField(field){
      return (e) => {
        const newProject = this.state.project;
        newProject[field] = e.target.value;
        this.setState({project: newProject});
      };
    };

    handleFile(e) {
      const reader = new FileReader();
      const file = e.currentTarget.files[0];
      reader.onloadend = () =>
      this.setState({image: { imageUrl: reader.result, imageFile: file}});
      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({image:{ [imageUrl]: "", [imageFile]: null }});
      }
    }

handleSubmit(e){
  e.preventDefault();
  const projectData = new FormData();
  projectData.append('project[title]', this.state.project.title);
  projectData.append('project[description]', this.state.project.description);
  projectData.append('project[user_id]', this.state.project.user_id);
  if (this.state.image.imageFile) {
   projectData.append('project[picture]', this.state.image.imageFile);
 }
  if (this.state.id) {
   projectData.append('project[id]', this.state.project.id);
 }

 if (this.props.formType == "Update Project"){
   this.props.action(this.state.project).then(() => this.props.history.push(`/projects/${this.props.match.params.projectId}`));

 } else {
   var existingProjects = JSON.parse(localStorage.getItem('projects'));
   var newProjects = existingProjects.push(this.state.project);
   localStorage.clear();
   this.props.action(projectData).then((response) => {
     this.props.history.push(`/projects/${response.project.id}`);
     console.log(response.project.id);});
 }
}

renderUploadButton(){
  if (this.state.image.imageUrl){
    return(
      <div className='image-upload-contianer'>
        <img src={this.state.image.imageUrl} />
        <label>Change Picture
            <input
              className='inputfile'
              type="file"
              onChange={this.handleFile.bind(this)}
              />
            </label>
      </div>
    );
  } else {
    return(
      <div className='image-upload-contianer'>
        <label>Upload a Picture
            <input
              className='inputfile'
              type="file"
              onChange={this.handleFile.bind(this)}
              />
        </label>
      </div>
    );
  }
}


render(){

  return(
    <div className="projects-form">
      <section className="form-box">
        <div className="inner-form-box">
          <form onSubmit={this.handleSubmit}>
            {this.renderUploadButton()}
            <br/>
            <input
              type="text"
              value={this.state.project.title}
              onChange={this.updateProjectField('title')}
              placeholder="Title"
              className="project-title"
              />
            <br/>
            <textarea
              value={this.state.project.description}
              onChange={this.updateProjectField('description')}
              placeholder="Description"
              rows="7"
              cols="80"
              />
            <br/>
              <select value={this.state.project.category} onChange={this.updateProjectField('category')}>
                <option value="" disabled>Choose a Category</option>
                <option value="woodworking">Woodworking</option>
                <option value="metal">Metal</option>
                <option value="technology">Technology</option>
                <option value="pottery">Pottery</option>
                <option value="furniture">Furniture</option>
                <option value="home">Home Improvement</option>
                <option value="lighting">Lighting</option>
                <option value="misc">misc</option>
              </select>

            <div className="form-footer">


              <div className="photo-preview-div">

              </div>

              <div className="buttoncontainer">
                <input className="submit" type="submit" value={this.props.formType}/>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
}

export default withRouter(ProjectsForm);
