import React from 'react';
import {merge} from 'lodash';
import { withRouter, Redirect} from 'react-router-dom';

class ProjectsForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.project;
    this.state = merge({}, this.state,{redirect:false});
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

 $.ajax({
    url: '/api/projects',
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  }).then(() => this.props.history.push(`/`), () => this.props.history.push(`/create`));;

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
              <div className="button-container">
                <input
                  type="file"
                  onChange={this.handleFile.bind(this)}
                  />
              </div>
              <div className="photo-preview-div">
                {preview}
              </div>
              <div className="button-container">
                <input className="submit" type="submit" value={this.props.formType}/>
              </div>
              {this.props.errors}
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
}

export default withRouter(ProjectsForm);
