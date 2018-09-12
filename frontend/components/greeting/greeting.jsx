import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  const signin = () =>(
    <div>
    <h3>Sign up dummy</h3>
  </div>
  );

  const welcome = () => (
    <div className="welcome">
      <h4>
        Hey, {props.currentUser.username}
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
