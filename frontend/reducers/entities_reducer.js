import {combineReducers} from 'redux';
import UsersReducer from './users_reducer';
import ProjectsReducer from './projects_reducer';
import StepsReducer from './steps_reducer';

export default combineReducers({
  users: UsersReducer,
  projects: ProjectsReducer,
  steps: StepsReducer
});
