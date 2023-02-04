/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counter.reducer';
import { usersReduser } from './users.reducer';

const appReducer = combineReducers({
  counter: counterReducer,
  users: usersReduser,
});
const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
