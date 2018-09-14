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

renderErrors() {
  return(
    <ul>
      {this.props.errors.map((error, i) => (
        <li key={`error-${i}`}>
          {error}
        </li>
      ))}
    </ul>
  );
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
        <input className="session-submit" type="submit" value ={this.props.formType}></input>
        {this.props.errors}
        {this.props.navLink}
        </form>
        {this.renderErrors()}
      </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
