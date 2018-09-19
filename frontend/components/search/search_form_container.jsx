import React from 'react';
import {connect} from 'react-redux';
import {fetchSearchResults} from '../../actions/project_actions';
import SearchForm from './search_form';

const mapStateToProps= (state) => {
  return {
      searches: state.searches,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearchResults: (query) => dispatch(fetchSearchResults(query)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(SearchForm);
