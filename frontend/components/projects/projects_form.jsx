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
  this.props.action(this.state).then(() => this.props.history.push('/')).then(this.setState({redirect : true}));
}



render(){

  if(this.state.redirect) {
    return <Redirect to={'/'} />;
  }


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
        <div className="button-container">
          <button> Dead button</button>
          <input className="submit" type="submit" value={this.props.formType}/>
        </div>
      </form>
        </div>
      </section>
    </div>
  )
}
}

export default withRouter(ProjectsForm);
