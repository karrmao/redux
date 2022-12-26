import { createStore } from 'redux';
import counterReduser from './counter.reducer';

const store = createStore(counterReduser);
export default store;
