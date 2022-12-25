export const ADD_USER = 'USER/ADD_USER';
export const DELETE_USER = 'USER/DELETE';
export const UPDATE_USER = 'USER/UPDATE_USER';

export const addUser = userData => {
  return {
    type: ADD_USER,
    payload: {
      userData,
    },
  };
};

export const deleteUser = userId => {
  return {
    type: ADD_USER,
    payload: {
      userId,
    },
  };
};

export const updateUser = (userData, userId) => {
  return {
    type: UPDATE_USER,
    payload: {
      userData,
      userId,
    },
  };
};
