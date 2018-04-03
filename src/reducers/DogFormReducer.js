import {
  DOG_UPDATE,
  DOG_CREATE,
  DOG_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  breed: '',
  gender: '',
  age: '',
  bio: '',
  phone: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DOG_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case DOG_CREATE:
      return INITIAL_STATE;
    case DOG_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
