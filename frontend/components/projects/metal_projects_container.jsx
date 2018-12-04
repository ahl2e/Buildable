import {connect} from 'react-redux';

import CategoryIndex from './category_index';
import {fetchProjects,fetchCategoryProjects} from '../../actions/project_actions';
import {selectMetalProjects} from '../../reducers/selectors';



const mapStateToProps = (state) => {
  return {
    projects: selectMetalProjects(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
  };
} ;

const MetalProjectsContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryIndex);
export default MetalProjectsContainer;
