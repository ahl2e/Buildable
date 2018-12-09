import {connect} from 'react-redux';

import CategoryIndex from './category_index';
import {fetchProjects,fetchCategoryProjects} from '../../actions/project_actions';
import {selectMyProjects} from '../../reducers/selectors';



const mapStateToProps = (state) => {
  return {
    projects: selectMyProjects(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
  };
} ;

const MyProjectsContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryIndex);
export default MyProjectsContainer;
