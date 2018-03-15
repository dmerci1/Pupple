import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DogFormReducer from './DogFormReducer';

export default combineReducers({
  auth: AuthReducer,
  dogForm: DogFormReducer
});
