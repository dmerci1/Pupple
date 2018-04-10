import firebase from 'firebase';
import {
  DOG_UPDATE,
  DOG_CREATE,
  USER_DOG_CREATE,
  DOGS_FETCH_SUCCESS,
  DOG_SAVE_SUCCESS,


} from './types';

export const dogUpdate = ({ prop, value }) => {
  return {
    type: DOG_UPDATE,
    payload: { prop, value }
  };
};

export const dogCreate = ({ name, breed, gender, age, bio, phone, navigationProps }) => {
    const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/dogs`)
    .push({ name, breed, gender, age, bio, phone })
    .then(() => {
      dispatch({ type: DOG_CREATE });
      navigationProps.navigate('doglist');
  });
  };
};

export const userDogCreate = ({ name, breed, gender, age, bio, phone, uid, navigationProps }) => {
const doggy = firebase.database().ref().child('shelterDogs');
const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref('/shelterDogs/dogs')
    .push({ name, breed, gender, age, bio, phone })
    .then(() => {
      dispatch({ type: USER_DOG_CREATE });
      navigationProps.navigate('doglist');
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

export const fetchAllDogs = () => {

  return (dispatch) => {
      firebase.database().ref('/shelterDogs/dogs')
      .on('value', snapshot => {
        dispatch({ type: DOGS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const dogSave = ({ name, breed, gender, age, bio, phone, uid, navigationProps }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/dogs/${uid}`)
    .set({ name, breed, gender, age, bio, phone })
    .then(() => {
      dispatch({ type: DOG_SAVE_SUCCESS });
      navigationProps.navigate('doglist');
  });
  };
};

export const userDogSave = ({ name, breed, gender, age, bio, phone, uid }) => {

  return (dispatch) => {
    firebase.database().ref(`/shelterDogs/dogs/${uid}`)
    .update({ name, breed, gender, age, bio, phone })
    .then(() => {
      dispatch({ type: DOG_SAVE_SUCCESS });

  });
  };
};


export const dogDelete = ({ uid, navigationProps }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/dogs/${uid}`)
      .remove()
      .then(() => {
        dispatch({ type: DOG_SAVE_SUCCESS });
        navigationProps.navigate('doglist');
      });
  };
};

export const userDogDelete = ({ uid, navigationProps }) => {

  return (dispatch) => {
    firebase.database().ref(`/userDogs/${uid}`)
      .remove()
      .then(() => {
        dispatch({ type: DOG_SAVE_SUCCESS });
        navigationProps.navigate('doglist');
      });
  };
};
