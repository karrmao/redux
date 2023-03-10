/* eslint-disable spaced-comment */
import { createStore } from 'redux';

const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';

export const increment = () => {
  return { type: INCREMENT };
};

export const decrement = () => {
  return { type: DECREMENT };
};

export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export const store = createStore(counterReducer);

console.log(store); //{dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, @@observable: ƒ}

//- test data
store.dispatch(increment()); //1
store.dispatch(increment()); //2
store.dispatch(increment()); //3
store.dispatch(increment()); //4
store.dispatch(decrement()); //3

console.log(store.getState()); // 0

//console.log(store.getState()); // {name: 'Tom'} if state = { name: 'Tom' }
