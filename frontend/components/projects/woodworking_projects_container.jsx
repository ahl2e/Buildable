import {connect} from 'react-redux';

import CategoryIndex from './category_index';
import {fetchProjects,fetchCategoryProjects} from '../../actions/project_actions';
import {selectWoodworkingProjects} from '../../reducers/selectors';



const mapStateToProps = (state) => {
  return {
    projects: selectWoodworkingProjects(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
  };
} ;

const WoodworkingProjectsContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryIndex);
export default WoodworkingProjectsContainer;
