// Set up your root reducer here...
import { combineReducers } from 'redux';
import taskReducers from './taskReducers';
import userReducers from './userReducers';
import appReducers from './appReducers';

export default combineReducers({
  tasks: taskReducers,
  user: userReducers,
  app: appReducers
  // More reducers can go here
});
