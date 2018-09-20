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

demoLogin(e) {
  e.preventDefault();
  const user = Object.assign({}, {username: "DemoUser", password: "demopassword"});
  this.props.dispatchForm(user).then(() => this.props.history.push(`/`));
  this.setState({
    username: "",
    password: "",
    email:""
  });
}


handleSubmit(e) {
  e.preventDefault();
  const user = Object.assign({}, this.state);
  this.props.dispatchForm(user).then(() => this.props.history.push(`/`), () => this.props.history.push(`/signup`));
  this.setState({
    username: "",
    password: "",
    email:""
  });
}

  render(){
    const isSignUp = this.props.formType;
 let emailField;

 if ( isSignUp ==="Sign Up") {
   emailField =
   <input
     className="session-email"
     type="text"
     value={this.state.email}
     placeholder="Email"
     onChange={this.update('email')}
     />;
 } else {
   emailField = <div className="no-show"></div>
 }

    const sessionErrs = this.props.errors;
 let errorRenders;

 if (sessionErrs.length > 0) {
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
      <div className='session-form-page'>
        <div className="session-form-wrapper">
          <div className='session-form-blur'>
          </div>
        <form onSubmit={this.handleSubmit.bind(this)} className="session-form" >
          {emailField}
          <div className='session-input'>
          <input
             type="text"
             placeholder="Username"
             value={this.state.username}
             onChange={this.update('username').bind(this)}
             />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update('password')}
            />
        </div>
        <br/>
          {errorRenders}
          <input className="session-submit" type="submit" value ={this.props.formType}></input>
          <button className="demo-button" onClick={this.demoLogin.bind(this)}> Demo Login </button>
        {this.props.navLink}
        </form>
      </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
