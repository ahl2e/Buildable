import {connect} from 'react-redux';
import { selectAllComments } from '../../reducers/selectors';
import {deleteComment} from '../../actions/comment_actions';
import {fetchAllComments} from '../../actions/comment_actions';
import {withRouter} from 'react-router';
import CommentsIndex from './comments_index';

const mapStateToProps = (state) => {
  return {
    comments: selectAllComments(state),
    currentUserId: state.entities.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteComment: (comment) => dispatch(deleteComment(comment)),
    fetchAllComments: (projectId) => dispatch(fetchAllComments(projectId))
  };
};

const CommentsIndexContainer = withRouter(connect(mapStateToProps,mapDispatchToProps)(CommentsIndex));
export default CommentsIndexContainer;
