import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import permissionReducer from './permissionReducer';

const allReducers = combineReducers({
  taskReducer,
  permissionReducer,
});

export default allReducers;
