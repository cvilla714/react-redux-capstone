import { combineReducers } from 'redux';
import githubReducer from './githubReducer';
import alertReducer from './alertReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  github: githubReducer,
  alert: alertReducer,
  filter: filterReducer,
});
