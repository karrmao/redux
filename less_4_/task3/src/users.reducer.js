import {
  GO_NEXT,
  GO_PREV,
} from './users.actions';
import { users } from './usersData';

const initialState = {
  users: {
    usersList: [...users],
    currentPage: 1,
  },
};

const usersReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case GO_PREV:
      return {
        ...state,
        users: {
          ...state.users,
          currentPage:
            state.users.currentPage - 1,
        },
      };
    case GO_NEXT:
      return {
        ...state,
        users: {
          ...state.users,
          currentPage:
            state.users.currentPage + 1,
        },
      };
    default:
      return state;
  }
};
export default usersReducer;
