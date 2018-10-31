import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        display: false,
      };
    this.showDropDown = this.showDropDown.bind(this);
    this.hideDropDown = this.hideDropDown.bind(this);
  };


  showDropDown(e){
    e.preventDefault();
    this.setState({ display:true}), ()=> {
      document.addEventListener('click', this.hideDropdown);
    };
  }

  hideDropDown(){
    this.setState({display: false}), () => {
      document.addEventListener('click', this.showDropDown);
    };
  }

render(){
      <button className="user-photo" onClick={showDropDown}></button>


    {this.state.currentUser ? (
      <p>Hello, User</p>
    ):(
      <div className="greeting-container">
      <Link to={'/signup'}>Sign Up</Link>  |  <Link to={'/login'}>Log In</Link>
      </div>
    )}
}



}

export default Greeting;
