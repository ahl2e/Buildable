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
      // debugger
      const newStep = this.state;
      newStep[field] = e;
      this.setState({state: newStep});
    };
  }

handleSubmit(e){
  e.preventDefault();
  const formData = new FormData();
  formData.append('step[heading]', this.state.heading);
  formData.append('step[id]', this.state.id);
  formData.append('step[body]', this.state.body);
  formData.append('step[project_id]', this.state.project_id);
  formData.append('step[order_number]', this.state.order_number);
  if (this.state.imageFile) {
   formData.append('step[picture]', this.state.imageFile);
 }

 if (this.props.formType == "Edit Step") {
   this.props.action(this.state).then(() => this.props.history.goBack());
 } else {
   this.props.action(formData).then(() => this.props.history.push(`/projects/${this.props.match.params.project_Id}`));
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
        <p>Add a step:</p>

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

export default withRouter(StepsForm);
