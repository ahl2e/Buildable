import { merge } from 'lodash/merge';
import { combineReducers} from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import CommentsErrorsReducer from './comments_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  // comments: CommentsErrorsReducer
});
