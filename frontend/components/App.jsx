import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'

const App = () => (
  <div>
    <h1>Buildable</h1>
    <GreetingContainer/>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
