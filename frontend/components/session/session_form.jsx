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
}

  render(){
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
        <input type="submit" value ={this.props.formType}></input>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
