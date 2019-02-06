import { connect } from 'react-redux';
import { fetchProject } from '../../../actions/project_actions';
import { deleteProject } from '../../../actions/project_actions';
import { revealProject } from '../../../actions/project_actions';
import {fetchAllSteps} from '../../../actions/step_actions';
import {fetchAllComments} from '../../../actions/comment_actions';
import { selectProject } from '../../../reducers/selectors';
import {openModal, clearPayload} from '../../../actions/modal_actions';
import ProjectShow from './projects_show';

const mapStateToProps = (state, {match}) => {
      const projectId = parseInt(match.params.projectId);
      const project = selectProject(state, projectId);
      const loading = state.ui.loading;
      const building = state.ui.building;
        if (state.session.id){
          const user = state.entities.users[state.session.id].username;
          return{
            projectId,
            project,
            user,
            loading,
            building
          };
        } else {
            return {
              projectId,
              project,
              loading,
              building
            };
        }
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id)),
    deleteProject: (project) =>dispatch(deleteProject(project)),
    fetchAllSteps: (projectId) => dispatch(fetchAllSteps(projectId)),
    fetchAllComments: (projectId) => dispatch(fetchAllComments(projectId)),
    revealProject: () => dispatch(revealProject()),
    openModal: (component) => dispatch(openModal(component))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);
