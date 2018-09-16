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
  debugger
  e.preventDefault();
  this.props.action(this.state).then(() => this.props.history.push('/')).then(this.setState({redirect : true}));
}



render(){

  if(this.state.redirect) {
    return <Redirect to={'/'} />;
  }


  return(
    <div>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.title}
          onChange={this.update('title')}
          placeholder="Title"
          />
        <br/>
        <textarea
          value={this.state.description}
          onChange={this.update('description')}
          placeholder="Description"
          />
        <br/>
        <input type="submit" value={this.props.formType}/>
      </form>
    </div>
  )
}
}

export default withRouter(ProjectsForm);
