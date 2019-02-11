import {connect} from 'react-redux';
import StepFormModal from './step_form_modal';
import {withRouter} from 'react-router';
import {closeModal, carryPayload, clearPayload} from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  const step = ownProps.step;
  const idx = ownProps.idx;
  return { step:step, idx:idx };
};

const mapDispatchToProps = dispatch => {
  return{
    deleteStep: step => dispatch(deleteStep(step)),
    carryPayload: payload => dispatch(carryPayload(payload)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepFormModal);
