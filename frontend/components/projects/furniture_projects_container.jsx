import {connect} from 'react-redux';

import CategoryIndex from './category_index';
import {fetchProjects,fetchCategoryProjects} from '../../actions/project_actions';
import {selectFurnitureProjects} from '../../reducers/selectors';



const mapStateToProps = (state) => {
  return {
    projects: selectFurnitureProjects(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
  };
} ;

const FurnitureProjectsContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryIndex);
export default FurnitureProjectsContainer;
