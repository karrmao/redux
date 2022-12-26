// import { createStore, combineReducers } from 'redux';
// import { userReducer } from './user.reducer';
// import { cardReduser } from './card.reducer';
// import { languageReducer } from './language.reducer';

// const appReducer = combineReducers({
//   counter: cardReduser,
//   user: userReducer,
//   language: languageReducer,
// });
// const store = createStore(
//   appReducer,
//   // window.__REDUX_DEVTOOLS_EXTENSION__ &&
//   //   window.__REDUX_DEVTOOLS_EXTENSION__(),
// );
// export default store;

import { combineReducers, createStore } from 'redux';
import cartReducer from './cart.reducer';

import languageReducer from './language.reducer';
import userReducer from './user.reducer';

const appReduser = combineReducers({
  cart: cartReducer,
  language: languageReducer,
  user: userReducer,
});

const store = createStore(appReduser);
export default store;
