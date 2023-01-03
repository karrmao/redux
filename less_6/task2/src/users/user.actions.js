/* eslint-disable spaced-comment */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
export const SHOW_SPINNER = 'SHOW_SPINNER';
export const USER_DATA_RECIEVED = 'USER_DATA_RECIEVED';
import { getUserData } from './users.gataway';

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
  };
};

export const userDataRecieved = userData => {
  return {
    type: USER_DATA_RECIEVED,
    payload: {
      userData,
    },
  };
};

export const fetchUserData = userName => {
  return function (dispatch) {
    dispatch(showSpinner());
    getUserData(userName).then(userData => {
      //console.log(userData);
      dispatch(userDataRecieved(userData));
    });
  };
};
//console.log('I am async action');
