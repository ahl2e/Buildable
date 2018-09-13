import React from 'react';
import {connect} from 'react-redux';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';

const mapStateToProps =(state, ownProps) => {
  return{
    errors: Object.values(state.errors),
    formType: 'Sign Up',
    navLink: <Link to={'/login'}>Log In</Link>
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    dispatchForm : (user) => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
