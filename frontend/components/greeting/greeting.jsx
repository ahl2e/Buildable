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
    $('#drop-down').toggleClass('no-show'), ()=>{
      setTimeout(this.hideDropDown.bind(this),0);
    };


  }
  const hideDropDown = (event) => {
    $('#drop-down').addClass('no-show');
  }




  const welcome = () => (
    <section id="greeting-box">
      <div className="welcome">
        <button className="user-photo" onClick={toggleDropDown}>
        </button>
    </div>
    <div id="drop-down"
      className="no-show"
      onMouseLeave={hideDropDown}
       >
      <div id="drop-down-top">
        <p>{props.currentUser.username}</p>
        <button id="logout-button" onClick={props.logout}>LOG OUT</button>
      </div>
      <div id="drop-down-bottom">
      <Link
        to='/create'
        onClick={hideDropDown}> Create a Project
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
