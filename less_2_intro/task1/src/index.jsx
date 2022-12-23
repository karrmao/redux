import { createStore } from 'redux';

const incrementActionCreator = () => ({
  type: 'INCREMENT',
});

const decrementActionCreator = () => ({
  type: 'DECREMENT',
});

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counterReducer);

//console.log(store); //{dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, @@observable: ƒ}

store.dispatch(incrementActionCreator); //1
store.dispatch(incrementActionCreator); //2
store.dispatch(incrementActionCreator); //3
store.dispatch(decrementActionCreator); //2

console.log(store.getState()); // 0

//console.log(store.getState()); // {name: 'Tom'} if state = { name: 'Tom' }
