import React from 'react';
import {merge} from 'lodash';
import { withRouter, Redirect} from 'react-router-dom';
import ReactQuill from 'react-quill';

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
    updateProjectQuillField(field){
      return (e) => {
        const newProject = this.state.project;
        newProject[field] = e;
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
    updateStepQuillField(field,idx){
      return (e) => {
        const newSteps = this.state.steps;
        newSteps[idx][field] = e;
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
    };
      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({stepsFormData:{ [imageUrl]: "", [imageFile]: null }});
      }
    };}

handleSubmit(e){
  e.preventDefault();
  const projectData = new FormData();
  var sanitizeHtml = require('sanitize-html');
  projectData.append('project[title]', this.state.project.title);
  var cleanDescription = sanitizeHtml(this.state.project.description);
  projectData.append('project[description]', this.state.project.description);
  projectData.append('project[user_id]', this.state.project.user_id);
  projectData.append('project[category]', this.state.project.category);
  if (this.state.image.imageFile) {
   projectData.append('project[picture]', this.state.image.imageFile);
 }
  if (this.state.id) {
   projectData.append('project[id]', this.state.project.id);
 }

 if (this.props.formType == "Update Project"){
   this.props.action(this.state.project).then(() => this.props.history.push(`/`));

 } else {
   var existingProjects = JSON.parse(sessionStorage.getItem('projects'));
   var newProjects = existingProjects.push(this.state.project);
   sessionStorage.clear();
   let projectId;
   this.props.action(projectData).then((response) => {
     this.state.steps.forEach((step) => {
       if (step.heading != "" && step.body != ""){
         projectId = response.project.id;
         const newStep = new FormData();
         newStep.append('step[project_id]',response.project.id);
         newStep.append('step[heading]',step.heading);
         newStep.append('step[body]',step.body);
         if(step.imageFile){
           newStep.append('step[picture]',step.imageFile);
         }
         this.props.createStep(newStep);
       }
     });
   }).then(() => this.props.history.push(`/`));
 }
}

handleStepSubmit(e){
  e.preventDefault();
  var allSteps = this.state.steps;
  const newStep = {heading:"",body:"",imageUrl:null,imageFile:null};
  allSteps.push(newStep);
  this.setState({steps: allSteps});
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
        <label>Step Picture
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
  var formats = [
      "bold",
      "italic",
      "link",
      "strike",
      "script",
      "underline",
      "header",
      "list",
      "blockquote",
      "code-block"
    ];
  return(

    <form onSubmit={this.handleStepSubmit} className='steps-editor-form'>
      {this.renderStepUploadButton(step,idx)}
      <div className='steps-editor-form-text'>
        <textarea
          onChange={this.updateStepField('heading',idx)}
          value={step.heading}
          placeholder="Step Heading"
          id='step-heading-field'
          rows="1"
          cols="80"/>
        <ReactQuill
          onChange={this.updateStepQuillField('body',idx)}
          value={step.body}
          theme="snow"
          placeholder="Step Body"
          modules={ProjectsForm.modules}/>

      </div>
      <input
        type='submit'
        value='Add Step'
        className='step-submit'>
      </input>
    </form>
  )
}

renderSteps(){
  if (this.props.formType == "Publish Project"){
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
}

// HELPER RENDERS //


render(){

  var formats = [
      "bold",
      "italic",
      "link",
      "strike",
      "script",
      "underline",
      "header",
      "list",
      "blockquote",
      "code-block"
    ];

  return(
    <div className="projects-form">
      <section className="form-box">
        <div className="inner-form-box">
          <form onSubmit={this.handleSubmit}>
            {this.renderUploadButton(this.state.stepsFormData)}
            <br/>
            <div className='title-and-category'>
              <input
                type="text"
                value={this.state.project.title}
                onChange={this.updateProjectField('title')}
                placeholder="Title"
                className="project-title"
                />
              <select value={this.state.project.category} onChange={this.updateProjectField('category')} className='category-dropdown'>
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
          </div>
            <br/>
            <ReactQuill
              value={this.state.project.description}
              onChange={this.updateProjectQuillField('description')}
              theme="snow"
              placeholder="Describe this Project"
              modules={ProjectsForm.modules}
              formats={formats} />
            <br/>
            <div className='title-and-category'>
              <input className="project-submit" type="submit" value={this.props.formType}/>
              <p>Note: Add all your steps below before you publish!</p>
            </div>
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
ProjectsForm.modules= {
  toolbar: [
      [{ 'header': []}],
      ['bold', 'italic',
      'underline', 'strike',{'script': 'sub'}, {'script': 'super'}],
      ['link','blockquote','code-block'],
      [{'list': 'bullet'}],
      ['clean']
    ],
};


export default withRouter(ProjectsForm);
