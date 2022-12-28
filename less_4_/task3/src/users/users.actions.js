export const GO_NEXT = 'USERSLIST/GO_NEXT';
export const GO_PREV = 'USERSLIST/GO_PREV';

export const goNext = () => {
  return { type: GO_NEXT };
};

export const goPrev = userId => {
  return { type: GO_PREV };
};
