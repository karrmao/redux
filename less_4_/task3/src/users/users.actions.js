export const TO_NEXT_PAGE =
  'USERSLIST/TO_NEXT_PAGE';
export const TO_PREV_PAGE =
  'USERSLIST/TO_PREV_PAGE';

export const goNext = () => {
  return { type: TO_NEXT_PAGE };
};

export const goPrev = () => {
  return { type: TO_PREV_PAGE };
};
