import React from 'react';
import {connect} from 'react-redux';
import {fetchSearchResults} from '../../actions/project_actions';
import SearchIndex from './search_index';
import {selectAllSearches} from '../../reducers/selectors';

  const mapStateToProps = (state) => {
    return {
      searches: selectAllSearches(state),
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchSearchResults: (query) => dispatch(fetchSearchResults(query))
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex);
