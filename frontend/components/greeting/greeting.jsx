import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  const signin = () =>(
    <div className="greeting-container">
    <Link to={'/signup'}>Sign Up</Link>  |  <Link to={'/login'}>Log In</Link>
    </div>
  );

  const showDropDown = () => {
    $('#drop-down').toggleClass('no-show');
  }

  const welcome = () => (
    <section id="greeting-box">
      <div className="welcome">
        <button className="user-photo" onClick={showDropDown}>
        </button>
    </div>
    <div id="drop-down" class="no-show">
      <div id="drop-down-top">
        <button onClick={props.logout}>LOG OUT</button>
      </div>
      <div id="drop-down-bottom">
      <Link to='/create'> Create a Project</Link>
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
