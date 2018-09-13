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

  updateUsername(e){
    return this.setState({
      username: e.target.value
    });
  }

updatePassword(e){
  return this.setState({
    password: e.target.value
  });
}

handleSubmit(e) {
  e.preventDefault();
  const user = Object.assign({}, this.state);
  this.props.dispatchForm(user);
}

  render(){
    return(
        <div>{this.props.formType} or {this.props.navLink}</div>
        <form onSubmit={this.handleSubmit} >
        <br/>
          <label>Username
          <input type="text" value={this.state.username} onChange={updateUsername()} />
        </label>
      <br/>
          <label>Password
          <input type="password" value={this.state.password} onChange={updatePassword()} />
        </label>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
