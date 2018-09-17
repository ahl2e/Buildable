import React from 'react';
import {merge} from 'lodash';
import { withRouter, Redirect} from 'react-router-dom';

class StepsForm extends React.Component {
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
        <p>Add a step:</p>
        <input
          type="text"
          value={this.state.heading}
          onChange={this.update('heading')}
          placeholder="Step Heading"
          className="step-heading"
          />
        <br/>
        <p>Describe this step</p>
        <textarea
          value={this.state.body}
          onChange={this.update('body')}
          placeholder="Body"
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

export default withRouter(StepsForm);
