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
   // var lastProjectId = existingProjects[existingProjects.length -1 ].id;
   // this.state = merge({}, this.state,{id:lastProjectId + 1});
   var newProjects = existingProjects.push(this.state.project);
   // const newId = existingProjects[existingProjects.length - 1].id;
   localStorage.clear();
   // this.props.action(projectData);
   debugger
   $.ajax({
     url: '/api/projects',
     method: `${this.props.method}`,
     data: projectData,
     contentType: false,
     processData: false
   }).then(localStorage.clear()).then(() => this.props.history.push(`/projects`));
 }
}

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

render(){
  var preview = this.state.image.imageUrl ? <img src={this.state.image.imageUrl} /> : null;
  if (this.state.project){
    preview = <img src={this.state.image.imageUrl} />;
  }

  let uploadButton;
    if (this.props.formType == "Create Project"){
      uploadButton = <div className="button-container">
                        <label>Upload a Picture
                        <input
                          type="file"
                          className="fileinput"
                          onChange={this.handleFile.bind(this)}
                          />
                      </label>
                    </div>;
    } else {
      uploadButton = null;
    }
  return(
    <div className="projects-form">
      <section className="form-box">
        <div className="inner-form-box">
          <form onSubmit={this.handleSubmit}>
            <p>My Project is called:</p>
            <input
              type="text"
              value={this.state.project.title}
              onChange={this.updateProjectField('title')}
              placeholder="Title"
              className="project-title"
              />
            <br/>
            <p>Add a brief description of your project</p>
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

              {uploadButton}

              <div className="photo-preview-div">
                {preview}
              </div>

              <div className="button-container">
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
