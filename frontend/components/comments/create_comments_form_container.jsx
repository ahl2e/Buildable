import {connect} from 'react-redux';
import CommentsForm from './comments_form';
import {selectAllComments} from '../../reducers/selectors';
import {createComment} from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  const step = {
    heading: '',
    body: '',
    // project_id: parseInt(ownProps.match.params.project_Id),
  };
  const currentUserId = state.session.id;
  return{step, currentUserId};
};

const mapDispatchToProps = (dispatch) => {
  return{
    create: (comment) => dispatch(createComment(comment))
  };
};


const CreateCommentsFormContainer = connect(mapStateToProps,mapDispatchToProps)(CommentsForm);
export default CreateCommentsFormContainer;
