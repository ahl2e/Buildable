import { connect } from 'react-redux';
import { fetchProject } from '../../../actions/project_actions';
import {fetchAllSteps} from '../../../actions/step_actions';
import { selectProject } from '../../../reducers/selectors';
import ProjectShow from './projects_show';

const mapStateToProps = (state, {match}) => {
      const projectId = parseInt(match.params.projectId);
      const project = selectProject(state, projectId);
      return {
        projectId,
        project
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id)),
    fetchAllSteps: (projectId) => dispatch(fetchAllSteps(projectId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);
