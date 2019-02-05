import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  const signin = () =>(
    <div className="greeting-container">
    <Link to={'/signup'}>Sign Up</Link>  |  <Link to={'/login'}>Log In</Link>
    </div>
  );
  const toggleDropDown = (event) => {
    event.stopPropagation();
    $('#drop-down-whole').toggleClass('no-show'), ()=>{
      setTimeout(this.hideDropDown.bind(this),0);
    };


  }
  const hideDropDown = (event) => {
    $('#drop-down-whole').addClass('no-show');
  }

  const welcome = () => (
    <section id="greeting-box">
      <div className="welcome">
        <button className="user-photo" onClick={toggleDropDown}>
        </button>
    </div>
    <div id="drop-down-whole"
      className="no-show"
      onMouseLeave={hideDropDown}
       >
      <div id="drop-down-top">
        <div id="drop-down-top-left">
          <p>{props.currentUser.username}</p>
          <Link to='/my_projects'> My Projects</Link>
        </div>
        <button id="logout-button" onClick={props.logout}>Log out</button>
      </div>
      <div id="drop-down-bottom">
      <Link
        to='/create'
        id='dropdown-build-link'
        onClick={hideDropDown}> Build a Project
      </Link>
    </div>
    </div>
  </section>
  )

  if(props.currentUser){
    return welcome();
  }else{
    return signin();
  }
};


export default Greeting
