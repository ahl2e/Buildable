import { connect } from 'react-redux';
import { fetchProject } from '../../../actions/project_actions';
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
    fetchProject: (id) => fetchProject(id)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);
