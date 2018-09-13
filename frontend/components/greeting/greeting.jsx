import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  const signin = () =>(
    <div>
    <h3>Sign in and build something</h3>
    <Link to={'/signup'}>Sign Up</Link>
    <br/>
    <Link to={'/login'}>Log In</Link>

  </div>
  );

  const welcome = () => (
    <div className="welcome">
      <h4>
        Hey, {props.currentUser.username}
        <button onClick={props.logout}>Log Out</button>
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
