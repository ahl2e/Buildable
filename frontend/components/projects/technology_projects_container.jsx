import {connect} from 'react-redux';

import CategoryIndex from './category_index';
import {fetchProjects,fetchCategoryProjects} from '../../actions/project_actions';
import {selectTechnologyProjects} from '../../reducers/selectors';



const mapStateToProps = (state) => {
  return {
    projects: selectTechnologyProjects(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
  };
} ;

const TechnologyProjectsContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryIndex);
export default TechnologyProjectsContainer;
