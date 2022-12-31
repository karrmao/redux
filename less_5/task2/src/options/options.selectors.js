import { createSelector } from 'reselect';

// eslint-disable-next-line import/prefer-default-export, arrow-body-style
export const optionsListSelector = state => {
  return state.options.optionsList;
};

export const selectedIdsSelector = state => {
  return state.options.optionsList;
};

export const selectedOptionsSelector = createSelector(
  [optionsListSelector, selectedIdsSelector],
  (allOptionsList, selectedIds) => {
    return allOptionsList.filter(option =>
      selectedIds.includes(option.id),
    );
  },
);

export const availableOptionsSelector = createSelector(
  [optionsListSelector, selectedIdsSelector],
  (allOptionsList, selectedIds) => {
    return allOptionsList.filter(
      option => !selectedIds.includes(option.id),
    );
  },
);

// export const selectedOptionsSelector = state => {
//   //   const allOptionsList = state.options.optionsList;
//   //   const selectedIds = state.options.selected;
//   const allOptionsList = optionsListSelector(state);
//   const selectedIds = selectedIdsSelector(state);

//   return allOptionsList.filter(option => selectedIds.includes(option.id));
// };

// export const availableOptionsSelector = state => {
//   const allOptionsList = optionsListSelector(state);
//   const selectedIds = selectedIdsSelector(state);

//   return allOptionsList.filter(option => !selectedIds.includes(option.id));
// };
