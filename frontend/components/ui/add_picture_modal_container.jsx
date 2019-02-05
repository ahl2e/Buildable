import {connect} from 'react-redux';
import AddPictureModal from './add_picture_modal';
import {closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  const userId = state.session.id;
  return {title:"", userId: userId};
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(AddPictureModal);
