import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

update(field) {
  return e => this.setState({
    [field]: e.currentTarget.value
  });
}


handleSubmit(e) {
  e.preventDefault();
  const user = Object.assign({}, this.state);
  this.props.dispatchForm(user);
  this.setState({
    username: "",
    password: "",
    email:""
  });
}

  render(){
    const isSignUp = this.props.formType;
 let emailField;

 if ( isSignUp ==="SIGN UP") {
   emailField =
   <input
     type="text"
     value={this.state.email}
     placeholder="email"
     onChange={this.update('email')}
     />;
 } else {
   emailField = <div className="no-show"></div>
 }
    return(
      <div className='session-form-page'>
        <form onSubmit={this.handleSubmit.bind(this)} className="session-form" >
          <input type="text" placeholder="username" value={this.state.username} onChange={this.update('username').bind(this)} />
      <br/>
          <input type="password" placeholder="password" value={this.state.password} onChange={this.update('password')} />
        <br/>
        {emailField}
        <input className="session-submit" type="submit" value ={this.props.formType}></input>
        </form>
        <div className="session-form-headings">{this.props.navLink}</div>
        <div className='session-form-blur'>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
