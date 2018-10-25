import {combineReducers} from 'redux';
import UsersReducer from './users_reducer';
import ProjectsReducer from './projects_reducer';
import StepsReducer from './steps_reducer';
import SearchesReducer from './searches_reducer';
import CommentsReducer from './comments_reducer';

export default combineReducers({
  users: UsersReducer,
  projects: ProjectsReducer,
  steps: StepsReducer,
  searches: SearchesReducer,
  comments: CommentsReducer
});
