/* eslint-disable arrow-body-style */
export const TOGGLE_OPTION = 'OPTIOMS/TOGGLE_OPTION';

export const toogleOption = optionId => {
  return {
    type: TOGGLE_OPTION,
    payload: {
      optionId,
    },
  };
};
