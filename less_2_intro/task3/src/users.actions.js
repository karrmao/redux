/* eslint-disable spaced-comment */
export const ADDUSER = 'USER/ADD';
export const DELETEUSER = 'USER/DELETE';

export const addUser = userData => ({
  type: ADDUSER,
  userData,
});

export const deleteUser = id => ({
  type: DELETEUSER,
  id,
});

//'USER/ADD' - USER це 'сушність' та використовується
//для того щою пікреслито до чого воно відноситься;
