import {
  TO_NEXT_PAGE,
  TO_PREV_PAGE,
} from './users.actions';
import { users } from './usersData';

const initialState = {
  usersList: users,
  currentPage: 1,
};
const usersReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case TO_NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case TO_PREV_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    default:
      return state;
  }
};
export default usersReducer;
