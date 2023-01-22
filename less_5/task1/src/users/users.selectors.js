/* eslint-disable arrow-body-style */
export const usersListSelector = state => {
  return state.users.usersList;
};

export const usersPageSelector = state => {
  return state.users.currentPage;
};
