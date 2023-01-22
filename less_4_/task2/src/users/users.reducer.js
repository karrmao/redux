/* eslint-disable prettier/prettier */
import { ADD_USER, DELETE_USER } from './users.actions';

const initialState = {
  usersList: [],
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.userData),
      };
    // case DELETE_USER:
    //   const newList = state.usersList.filter(
    //     user => user.id !== action.payload.userId,
    //   );
    //   return {
    //     ...state,
    //     usersList: newList,
    //   };
    case DELETE_USER:
      return {
        ...state,
        usersList: state.usersList.filter(
          user => user.id !== action.payload.userId,
        ),
      };
    default:
      return state;
  }
};
export default usersReduser;
