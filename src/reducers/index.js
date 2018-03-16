import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DogFormReducer from './DogFormReducer';
import DogReducer from './DogReducer';

export default combineReducers({
  auth: AuthReducer,
  dogForm: DogFormReducer,
  dogs: DogReducer
});
