import {connect} from 'react-redux';

import CategoryIndex from './category_index';
import {fetchProjects,fetchCategoryProjects} from '../../actions/project_actions';
import {selectPotteryProjects} from '../../reducers/selectors';



const mapStateToProps = (state) => {
  return {
    projects: selectPotteryProjects(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
  };
} ;

const PotteryProjectsContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryIndex);
export default PotteryProjectsContainer;
