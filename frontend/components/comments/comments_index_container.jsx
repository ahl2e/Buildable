import {connect} from 'react-redux';
import { selectAllComments } from '../../reducers/selectors';
import {deleteComments} from '../../actions/comment_actions';
import {withRouter} from 'react-router';
import CommentsIndex from './comments_index';

const mapStateToProps = (state) => {
  return {
    comments: selectAllComments(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteComments: dispatch(deleteComments(comment))
  };
};

const CommentsIndexContainer = withRouter(connect(mapStateToProps,mapDispatchToProps)(CommentsIndex));
export default CommentsIndexContainer;
