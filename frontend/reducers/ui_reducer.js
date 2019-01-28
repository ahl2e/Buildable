import {combineReducers} from 'redux';

import LoadingReducer from './loading_reducer';
import BuildingReducer from'./building_reducer';

export default combineReducers({
  loading: LoadingReducer,
  building: BuildingReducer,
});
