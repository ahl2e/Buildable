import { connect } from 'react-redux';
import { fetchProject } from '../../../actions/project_actions';
import { deleteProject } from '../../../actions/project_actions';
import {fetchAllSteps} from '../../../actions/step_actions';
import {fetchAllComments} from '../../../actions/comment_actions';
import { selectProject } from '../../../reducers/selectors';
import ProjectShow from './projects_show';

const mapStateToProps = (state, {match}) => {
      const projectId = parseInt(match.params.projectId);
      const project = selectProject(state, projectId);
      const loading = state.detailLoading;
        if (state.session.id){
          const user = state.entities.users[state.session.id].username;
          return{
            projectId,
            project,
            user,
            loading
          };
        } else {
            return {
              projectId,
              project,
              loading
            };
        }
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id)),
    deleteProject: (project) =>dispatch(deleteProject(project)),
    fetchAllSteps: (projectId) => dispatch(fetchAllSteps(projectId)),
    fetchAllComments: (projectId) => dispatch(fetchAllComments(projectId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);
