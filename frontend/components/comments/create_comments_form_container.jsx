import {connect} from 'react-redux';
import CommentsForm from './comments_form';
import {selectAllComments} from '../../reducers/selectors';
import {createComment} from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  const step = {
    heading: '',
    body: '',
    // project_id: parseInt(ownProps.match.params.project_Id),
  };
  const username = Object.values(state.entities.users)[0]["username"];
  const currentUserId = state.session.id;
  const errors = state.errors;
  return{step, currentUserId, errors, username};
};

const mapDispatchToProps = (dispatch) => {
  return{
    create: (comment) => dispatch(createComment(comment))
  };
};


const CreateCommentsFormContainer = connect(mapStateToProps,mapDispatchToProps)(CommentsForm);
export default CreateCommentsFormContainer;
