import React from 'react';
import {merge} from 'lodash';
import { withRouter, Redirect} from 'react-router-dom';

class ProjectsForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.project;
    this.state = merge({}, this.state,{redirect:false});
    this.state.userId = this.props.userId;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) =>{
      this.setState({[field]: e.target.value});
    };
  }

handleSubmit(e){
  e.preventDefault();
  const formData = new FormData();
  formData.append('project[title]', this.state.title);
  formData.append('project[description]', this.state.description);
  formData.append('project[user_id]', this.state.user_id);
  if (this.state.imageFile) {
   formData.append('project[picture]', this.state.imageFile);
 }
  if (this.state.id) {
   formData.append('project[id]', this.state.id);
 }

 if (this.props.formType == "Update Project"){
   this.props.action(this.state);

   // $.ajax({
   //   url: `/api/projects/${this.state.id}`,
   //   method: `${this.props.method}`,
   //   data: this.state,
   //   contentType: false,
   //   processData: false
   // }).then(() => this.props.history.push(`/projects/${this.props.match.params.projectId}`));

 } else {
   var existingProjects = JSON.parse(localStorage.getItem('projects'));
   var lastProjectId = existingProjects[existingProjects.length -1 ].id;
   this.state = merge({}, this.state,{id:lastProjectId + 1});
   var newProjects = existingProjects.push(this.state);
   localStorage.setItem('projects', []);

   $.ajax({
     url: '/api/projects',
     method: `${this.props.method}`,
     data: formData,
     contentType: false,
     processData: false
   }).then(() => this.props.history.push(`/`));
 }
}

handleFile(e) {
  const reader = new FileReader();
  const file = e.currentTarget.files[0];
  reader.onloadend = () =>
    this.setState({ imageUrl: reader.result, imageFile: file});

  if (file) {
    reader.readAsDataURL(file);
  } else {
    this.setState({ imageUrl: "", imageFile: null });
  }
}

render(){
  var preview = this.state.imageUrl ? <img src={this.state.imageUrl} /> : null;
  if (this.state.project){
    preview = <img src={this.state.project.imageUrl} />;
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
    debugger
  return(
    <div className="projects-form">
      <section className="form-box">
        <div className="inner-form-box">
          <form onSubmit={this.handleSubmit}>
            <p>My Project is called:</p>
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')}
              placeholder="Title"
              className="project-title"
              />
            <br/>
            <p>Add a brief description of your project</p>
            <textarea
              value={this.state.description}
              onChange={this.update('description')}
              placeholder="Description"
              rows="7"
              cols="80"
              />
            <br/>
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
