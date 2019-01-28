// Set up your root reducer here...
import { combineReducers } from 'redux';
import taskReducers from './taskReducers';
import userReducers from './userReducers';

export default combineReducers({
  tasks: taskReducers,
  user: userReducers
  // More reducers can go here
});
