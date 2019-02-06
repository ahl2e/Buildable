import {connect} from 'react-redux';
import DeleteModal from './delete_modal';
import {closeModal} from '../../actions/modal_actions';
import { deleteProject } from '../../actions/project_actions';


const mapStateToProps = (state) => {
  debugger
  const id = state.session.id;
  return {id: id};
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    deleteProject:(project) => dispatch(deleteProject(project)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(DeleteModal);
