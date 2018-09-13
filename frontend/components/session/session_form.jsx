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
   <label>Email
   <input
     type="text"
     value={this.state.email}
     onChange={this.update('email')}
     />
 </label>;
 } else {
   emailField = <div className="no-show"></div>
 }
    return(
      <div>
        <div>{this.props.formType} or {this.props.navLink}</div>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <label>Username
          <input type="text" value={this.state.username} onChange={this.update('username').bind(this)} />
        </label>
      <br/>
        <label>Password
          <input type="password" value={this.state.password} onChange={this.update('password')} />
        </label>
        <br/>
        {emailField}
        <input type="submit" value ={this.props.formType}></input>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
