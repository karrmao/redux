import { createStore } from 'redux';
import usersReducer from './users.reducer';

const store = createStore(usersReducer);

export default store;
// window.__REDUX_DEVTOOLS_EXTENSION__ &&
//   window.__REDUX_DEVTOOLS_EXTENSION__(),
