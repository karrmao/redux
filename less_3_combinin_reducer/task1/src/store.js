import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counter.reducer';

const appReducer = combineReducers({
  counter: counterReducer,
});
const store = createStore(appReducer);

export default store;
