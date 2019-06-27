import { combineReducers } from 'redux';
import userReducer from './userReducer';
import contactReducer from './contactReducer';
import actReducer from './actReducer';

export default combineReducers({
  user: userReducer,
  contact: contactReducer,
  act: actReducer
});
