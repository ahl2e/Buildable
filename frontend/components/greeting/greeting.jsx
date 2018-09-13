import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  const signin = () =>(
    <div className="greeting-container">
    <h3>Sign in and build something</h3>
    <Link to={'/signup'}>Sign Up</Link>  |  <Link to={'/login'}>Log In</Link>
    </div>
  );

  const welcome = () => (
    <div className="welcome">
      <h4>
        Hey, {props.currentUser.username}
        <button onClick={props.logout}>LOG OUT</button>
      </h4>
    </div>
  )
  if(props.currentUser){
    return welcome();
  }else{
    return signin();
  }
};

export default Greeting
