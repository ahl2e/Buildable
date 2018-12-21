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

  return(
    <div className="projects-form">
      <section className="form-box">
        <div className="inner-form-box">
      <form onSubmit={this.handleSubmit}>
        <p>Add a step: (Title and Body)</p>

        <br/>
          <textarea
            onChange={this.update('heading')}
            value={this.state.heading}
            placeholder="Step Heading"
            id='step-heading-field'
            rows="1"
            cols="80"/>
          <ReactQuill
            onChange={this.updateStepQuillField('body')}
            modules={StepsForm.modules}
            value={this.state.body}/>
        <br/>
        <div className="form-footer">
          {photoButton}

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
