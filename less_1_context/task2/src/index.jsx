// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.scss';
// import App from './App';

// const rootElement = document.querySelector('#root');

// ReactDOM.render(<App />, rootElement);
import { createStore } from 'rdux';

const incrementAction = {
  type: 'INCREMENT',
};

const decrementAction = {
  type: 'DECREMENT',
};

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

const store = createReducer();
