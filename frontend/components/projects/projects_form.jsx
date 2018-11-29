import React from 'react';
import {merge} from 'lodash';
import { withRouter, Redirect} from 'react-router-dom';
// import CreateStepsFormContainer from '../steps/steps_form';

class ProjectsForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      project: props.project,
      stepsFormData: {
        heading:"",
        body:"",
        imageUrl:null,
        imageFile:null
      },
      steps:[{
        heading:"",
        body:"",
        imageUrl:null,
        imageFile:null
      }],
      image: {imageFile: null, imageUrl: "" }
    };
    this.state.project.userId = this.props.userId;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStepSubmit = this.handleStepSubmit.bind(this);
    this.updateStepField = this.updateStepField.bind(this);
    this.renderStepForm = this.renderStepForm.bind(this);
    this.handleStepFile = this.handleStepFile.bind(this);
  }

  componentDidMount(){
    window.scrollTo(0,0);
  }


// FORM UPDATERS//

    updateProjectField(field){
      return (e) => {
        const newProject = this.state.project;
        newProject[field] = e.target.value;
        this.setState({project: newProject});
      };
    }

    updateStepField(field,idx){
      return (e) => {
        const newSteps = this.state.steps;
        newSteps[idx][field] = e.target.value;
        this.setState({steps: newSteps});
      };
    }

// FORM UPDATERS//

// HANDLERS//

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

    handleStepFile(idx) {
      return (e) => {
      const reader = new FileReader();
      const file = e.currentTarget.files[0];
      var newSteps = this.state.steps;
      reader.onloadend = () => {
        newSteps[idx].imageUrl = reader.result;
        newSteps[idx].imageFile = file;
      this.setState({steps: newSteps});
    }
      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({stepsFormData:{ [imageUrl]: "", [imageFile]: null }});
      }
    }}

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

handleStepSubmit(e){
  e.preventDefault();
  var allSteps = this.state.steps;
  const newStep = {heading:"",body:"",imageUrl:null,imageFile:null};
  allSteps.push(newStep);
  this.setState({steps: allSteps});
  // this.setState({stepsFormData:{heading:"",body:"",imageUrl:null,imageFile:null}});
}

// HANDLERS//

// HELPER RENDERS //

renderUploadButton(){
  if (this.props.formType == 'Update Project'){
    return null;
  }
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
renderStepUploadButton(step,idx){
  if (this.props.formType == 'Update Project'){
    return null;
  }
  if (step.imageUrl){
    return(
      <div className='step-image-upload-contianer'>
        <img src={step.imageUrl} />

      </div>
    );
  } else {
    return(
      <div className='step-image-upload-contianer'>
        <label>Upload a Picture
            <input
              className='inputfile'
              type="file"
              onChange={this.handleStepFile(idx)}
              />
        </label>
      </div>
    );
  }
}

renderStepForm(step,idx){
  return(
    <form onSubmit={this.handleStepSubmit} className='steps-editor-form'>
      {this.renderStepUploadButton(step,idx)}
      <div className='steps-editor-form-text'>
        <input
          type='text'
          onChange={this.updateStepField('heading',idx)}
          value={step.heading}
          placeholder="Step Heading">
        </input>
        <input
          type='text'
          onChange={this.updateStepField('body',idx)}
          value={step.body}
          placeholder="Step Body">
        </input>
      </div>
      <input
        type='submit'
        value='Add Step'>
      </input>
    </form>
  )
}

renderSteps(){
  return(
    <ul>
      {this.state.steps.map((step,idx) => {
        return(
        <li key={idx}>
          {this.renderStepForm(step,idx)}
        </li>
      )
  })}
  </ul>
)}

// HELPER RENDERS //


render(){

  return(
    <div className="projects-form">
      <section className="form-box">
        <div className="inner-form-box">
          <form onSubmit={this.handleSubmit}>
            {this.renderUploadButton(this.state.stepsFormData)}
            <br/>
            <input
              type="text"
              value={this.state.project.title}
              onChange={this.updateProjectField('title')}
              placeholder="Title"
              className="project-title"
              />
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
            <input className="submit" type="submit" value={this.props.formType}/>
            <br/>
            <textarea
              value={this.state.project.description}
              onChange={this.updateProjectField('description')}
              placeholder="Description"
              rows="7"
              cols="80"
              />
            <br/>
          </form>
        </div>
      </section>
      <div>
        {this.renderSteps()}
      </div>
    </div>
  )
}
}

export default withRouter(ProjectsForm);
