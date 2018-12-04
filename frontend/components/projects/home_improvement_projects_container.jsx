import {connect} from 'react-redux';

import CategoryIndex from './category_index';
import {fetchProjects,fetchCategoryProjects} from '../../actions/project_actions';
import {selectHomeImprovementProjects} from '../../reducers/selectors';



const mapStateToProps = (state) => {
  return {
    projects: selectHomeImprovementProjects(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
  };
} ;

const HomeImprovementProjectsContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryIndex);
export default HomeImprovementProjectsContainer;
