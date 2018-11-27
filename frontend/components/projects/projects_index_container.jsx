import {connect} from 'react-redux';

import ProjectsIndex from './projects_index';
import {fetchProjects,fetchCategoryProjects} from '../../actions/project_actions';
import {selectAllProjects} from '../../reducers/selectors';



const mapStateToProps = (state) => {
  return {
    projects: selectAllProjects(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
    fetchCategoryProjects: () => dispatch(fetchCategoryProjects())
  };
} ;

const ProjectsIndexContainer = connect(mapStateToProps, mapDispatchToProps)(ProjectsIndex);
export default ProjectsIndexContainer;
