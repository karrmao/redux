import { createStore, combineReducers } from 'redux';
import counterReduser from './counter/counter.reducer';
import usersReduser from './users/users.reducer';

const reducer = combineReducers({
  users: usersReduser,
  counter: counterReduser,
});

const store = createStore(reducer);
export default store;
