import React from 'react';
import {connect} from 'react-redux';
import {fetchCategoryProjects} from '../../actions/project_actions';
import {selectAllCategories} from '../../reducers/selectors';
import CategoriesIndex from './categories_index';

  const mapStateToProps = (state, ownProps) => {
    return {
      categories: selectAllCategories(state),
      query: ownProps.match.params.categories
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchCategoryProjects: (query) => dispatch(fetchCategoryProjects(query))
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(CategoriesIndex);
