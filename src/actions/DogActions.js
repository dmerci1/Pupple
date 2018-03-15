import firebase from 'firebase';
import {
  DOG_INFO,
  ERASE_FORM
} from './types';

export const dogInfo = ({ prop, value }) => {
  return {
    type: DOG_INFO,
    payload: { prop, value }
  };
};

export const dogAdd = ({ name, breed, gender, age, bio }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/dogs`)
    .push({ name, breed, gender, age, bio })
    .then(() => {
      dispatch({ type: ERASE_FORM });
  });
  };
};
