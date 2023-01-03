/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
const baseUrl = 'https://api.github.com/users';

export const getUserData = userName =>
  fetch(`${baseUrl}/${userName}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  });
