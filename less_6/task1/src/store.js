/* eslint-disable no-underscore-dangle */
import { applyMiddleware, createStore, compose } from 'redux';
import counterReduser from './counter.reducer';

const logger = store => next => action => {
  console.group(action.type);
  console.info(action);
  const result = next(action);
  console.log('new state', store.getState());
  console.groupEnd();
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  counterReduser,
  composeEnhancers(applyMiddleware(logger)),
);
export default store;
