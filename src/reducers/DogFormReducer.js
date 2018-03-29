import {
  DOG_UPDATE,
  DOG_CREATE,
  DOG_FORM_RESET
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
    case DOG_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case DOG_CREATE:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
