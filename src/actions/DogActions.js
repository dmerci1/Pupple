import firebase from 'firebase';
import {
  DOG_INFO,
  ERASE_FORM,
  DOGS_FETCH_SUCCESS,
  DOG_SAVE_SUCCESS,

} from './types';

export const dogInfo = ({ prop, value }) => {
  return {
    type: DOG_INFO,
    payload: { prop, value }
  };
};

export const dogAdd = ({ name, breed, gender, age, bio }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/dogs`)
    .push({ name, breed, gender, age, bio })
    .then(() => {
      dispatch({ type: ERASE_FORM });
  });
  };
};

export const fetchDogs = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/dogs`)
      .on('value', snapshot => {
        dispatch({ type: DOGS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const dogSave = ({ name, breed, gender, age, bio, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/dogs/${uid}`)
    .set({ name, breed, gender, age, bio });
    dispatch({ type: DOG_SAVE_SUCCESS });
  };
};
