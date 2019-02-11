import {connect} from 'react-redux';
import DeleteModal from './delete_modal';
import {closeModal} from '../../actions/modal_actions';
import { deleteProject } from '../../actions/project_actions';


const mapStateToProps = (state) => {
  const project = Object.values(state.entities.projects)[0];
  const id = state.session.id;
  return {id, project};
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    deleteProject:(project) => dispatch(deleteProject(project)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(DeleteModal);
