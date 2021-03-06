import React from 'react';
import {merge} from 'lodash';
import { withRouter, Redirect} from 'react-router-dom';
import ReactQuill from 'react-quill';

class StepsForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.step;
    this.state = merge({}, this.state,{redirect:false});
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errors = this.props.errors;
  }

  componentDidMount(){
    window.scrollTo(0,0);
  }

  update(field) {
    return (e) =>{
      this.setState({[field]: e.target.value});
    };
  }

  updateStepQuillField(field){
    return (e) => {
      const newStep = this.state;
      newStep[field] = e;
      this.setState({state: newStep});
    };
  }

handleSubmit(e){
  e.preventDefault();
  var container = $('.editor').get(0);
  var sanitizeHtml = require('sanitize-html');
  const newStep = new FormData();
  newStep.append('step[heading]', this.state.heading);
  newStep.append('step[id]', this.state.id);
  var cleanBody = sanitizeHtml(this.state.body);
  newStep.append('step[body]', this.state.body);
  newStep.append('step[project_id]', this.state.project_id);
  if (this.state.imageFile) {
   newStep.append('step[picture]', this.state.imageFile);
 }

   if (this.props.formType == "Edit Step") {
     var info = this.state;
     this.props.action(this.state, info).then(() => this.props.history.goBack());
   } else {
     this.props.action(newStep).then(() => this.props.history.goBack());
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

renderStepUploadButton(step,idx){
  if (this.props.formType == 'Update Project'){
    return null;
  }
  if (this.state.imageUrl){
    return(
      <div className='add-step-image-upload-contianer'>
        <img src={this.state.imageUrl} />

      </div>
    );
  } else {
    return(
      <div className='add-step-image-upload-contianer'>
        <label>Step Picture
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
  const preview = this.state.imageUrl ? <img src={this.state.imageUrl} /> : null;
  if(this.state.redirect) {
    return <Redirect to={'/'} />;
  }

  let photoButton;
    if (this.props.formType == "Add Step"){
      photoButton = <div className="button-container">
                      <label>Upload a Picture
                      <input
                        type="file"
                        className="fileinput"
                        onChange={this.handleFile.bind(this)}
                        />
                    </label>
                  </div>;
                }else{
                  photoButton = null;
                }

   let errorRenders;

    if (this.props.errors.length > 0) {
      errorRenders =
      <div className="session-errors">
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    </div>
    } else {
      errorRenders = <div className="no-show"></div>
    }


   if (!this.props.errors){
    document.getElementById("session-errors").className.add('no-show');
   }


  return(
    <div className="projects-form">
      <section className="form-box">
        <div className="inner-edit-form-box">
      <form onSubmit={this.handleSubmit}>
          <textarea
            onChange={this.update('heading')}
            value={this.state.heading}
            placeholder="Step Heading"
            id='edit-step-heading-field'
            rows="1"
            cols="80"/>
          <ReactQuill
            onChange={this.updateStepQuillField('body')}
            modules={StepsForm.modules}
            value={this.state.body}/>
        <br/>
        <div className="form-footer">
          {this.renderStepUploadButton()}
          <div className="button-container">
            <input className="add-step-submit" type="submit" value={this.props.formType}/>
          </div>
        </div>

      </form>
      {errorRenders}
        </div>
      </section>
    </div>
  )
}
}
StepsForm.modules= {
  toolbar: [
      [{ 'header': []}],
      ['bold', 'italic',
      'underline', 'strike',{'script': 'sub'}, {'script': 'super'}],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link','blockquote','code-block'],
      ['clean']
    ],
};

export default withRouter(StepsForm);
