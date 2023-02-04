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
