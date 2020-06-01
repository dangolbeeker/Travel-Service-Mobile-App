import { combineReducers } from 'redux';
import { authReducer as auth } from './authReducer';


export default combineReducers({
  auth,
  reviews,
 search,
  
});