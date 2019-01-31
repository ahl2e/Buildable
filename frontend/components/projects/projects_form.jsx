import React from 'react';
import {merge} from 'lodash';
import { withRouter, Redirect} from 'react-router-dom';
import ReactQuill from 'react-quill';
import LoadingIcon from './projects_show/loading_icon';
import ProjectTitleContainer from './project_title_container';
import {closeModal} from '../../actions/modal_actions';
import ModalContainer from '../modal/modal_container';

class ProjectsForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      project: (props.formType == "Publish Project") ? props.payload : props.project,
      stepsFormData: {
        heading:"",
        body:"",
        imageUrl:null,
        imageFile:null
      },
      steps:[{
        heading: "Intro:",
        body:"",
        imageUrl:null,
        imageFile:null
      }],
      image: {imageFile: null, imageUrl: "" }
    };
    this.userId = this.props.userId;
    this.titleModal = <ProjectTitleContainer/>;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStepSubmit = this.handleStepSubmit.bind(this);
    this.updateStepField = this.updateStepField.bind(this);
    this.renderStepForm = this.renderStepForm.bind(this);
    this.handleStepFile = this.handleStepFile.bind(this);
  }

  componentDidMount(){
    window.scrollTo(0,0);
    if (this.props.formType == "Publish Project"){
      this.props.openModal(this.titleModal);
    }
  }


  componentDidUpdate(){

    if (this.props.payload){
      this.setState({project: this.props.payload});
      this.props.clearPayload();
    }
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
  let projectId;
  const projectData = new FormData();
  var sanitizeHtml = require('sanitize-html');
  projectData.append('project[title]', this.state.project.title);
  var cleanDescription = sanitizeHtml(this.state.project.description);
  projectData.append('project[description]', this.state.project.description);
  projectData.append('project[user_id]', this.state.project.userId);
  projectData.append('project[category]', this.state.project.category);
  if (this.state.image.imageFile) {
   projectData.append('project[picture]', this.state.image.imageFile);
 }
  if (this.state.id) {
    debugger
   projectData.append('project[id]', this.state.project.id);
 }

 if (this.props.formType == "Update Project"){
   this.props.action(this.state.project).then(() => this.props.history.push(`/`));

 } else {
   var existingProjects = JSON.parse(sessionStorage.getItem('projects'));
   var newProjects = existingProjects.push(this.state.project);
   sessionStorage.clear();
   this.props.action(projectData).then((response) => {
     projectId = response.project.id;
     this.state.steps.map((step,idx) => {
       if (step.body != ""){
         const newStep = new FormData();
         newStep.append('step[project_id]',response.project.id);
         newStep.append('step[heading]',step.heading);
         newStep.append('step[body]',step.body);
         newStep.append('step[order_number]',idx+1);
         if(step.imageFile){
           newStep.append('step[picture]',step.imageFile);
         }
         this.props.createStep(newStep);
       }
       setTimeout(this.props.history.push(`/projects/${projectId}`), 1000);
     });
   });
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
        <label>Click to Add a Picture
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

// renderTitle(){
//   if(this.state.project){
//     return this.state.project.title;
//   }else{
//     return null;
//   }
// }


render(){
  if (this.props.loading.detailLoading){
    return <LoadingIcon/>;
  }



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
      <ModalContainer/>
      <section className="form-box">
        <div className="inner-form-box">
          <form onSubmit={this.handleSubmit}>
            {this.renderUploadButton(this.state.stepsFormData)}
            <br/>
            <br/>
            <div className='title-and-category'>
              <p>Note: Add all your steps below before you publish!</p>
              <input className="project-submit" type="submit" value={this.props.formType}/>
            </div>
            <br/>
          </form>
        </div>
        <div id='steps-form-buffer'></div>
        <div id='form-step-wrapper'>
          {this.renderSteps()}
          <button onClick={this.handleStepSubmit} className='step-submit'>Add Step</button>
        </div>
      </section>
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
