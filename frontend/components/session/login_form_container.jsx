import React from 'react';
import {connect} from 'react-redux';
import SessionForm from './session_form';
import {Link} from 'react-router-dom';

const mapStateToProps =(state, ownProps) => {
  return{
    errors: Object.values(state.errors),
    formType: 'LOG IN',
    navLink: <Link to={'/login'}>SIGN UP</Link>
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    dispatchForm : (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
