import {
  DOG_INFO,
  ERASE_FORM
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  breed: '',
  gender: '',
  age: '',
  bio: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DOG_INFO:
      return { ...state, [action.payload.prop]: action.payload.value };
    case ERASE_FORM:
      return INITIAL_STATE;
    default:
      return state;
  }
};
