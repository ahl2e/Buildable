import {combineReducers} from 'redux';
import UsersReducer from './users_reducer';
import ProjectsReducer from './projects_reducer';

export default combineReducers({
  users: UsersReducer,
  projects: ProjectsReducer
});
