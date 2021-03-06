import {connect} from 'react-redux';
import ProjectTitleForm from './project_title';
import {closeModal, carryPayload, clearPayload} from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  const userId = state.session.id;
  return {title:"", userId: userId};
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    carryPayload: (payload) => dispatch(carryPayload(payload))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ProjectTitleForm);
