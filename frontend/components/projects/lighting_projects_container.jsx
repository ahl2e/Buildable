import {connect} from 'react-redux';

import CategoryIndex from './category_index';
import {fetchProjects,fetchCategoryProjects} from '../../actions/project_actions';
import {selectLightingProjects} from '../../reducers/selectors';



const mapStateToProps = (state) => {
  return {
    projects: selectLightingProjects(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
  };
} ;

const LightingProjectsContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryIndex);
export default LightingProjectsContainer;
