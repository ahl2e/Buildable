import {connect} from 'react-redux';
import { edit } from '../../actions/session_actions';
import UserPage from './user_page';
import {withRouter} from 'react-router';


const mapStateToProps = (state) => {
  const user = Object.values(state.entities.users)[0];
  return {user};
};

const mapDispatchToProps = (dispatch) => {
  return{
    edit: (id,formData) => dispatch(edit(id,formData))
  };
};


const UserPageContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(UserPage));
export default UserPageContainer;
