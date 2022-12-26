import React from 'react';
import { connect } from 'react-redux';
// import { increment, decrement, reset } from '../counter.actions';
import * as counterActions from '../counter.actions';

// const Counter = ({ counter, incr, decr, res }) => {
const Counter = ({ counter, increment, decrement, reset }) => {
  return (
    <div className="counter">
      {/* <button className="counter__button" onClick={incr}> */}
      <button className="counter__button" onClick={increment}>
        -
      </button>
      {/* <span className="counter__value" onClick={decr}> */}
      <span className="counter__value" onClick={decrement}>
        {counter}
      </span>
      {/* <button className="counter__button" onClick={res}> */}
      <button className="counter__button" onClick={reset}>
        +
      </button>
    </div>
  );
};
const mapState = state => {
  return {
    counter: state,
  };
};

// const mapDispatch = dispatch => {
//   return {
//     incr: () => dispatch(increment()),
//     decr: () => dispatch(decrement()),
//     res: () => dispatch(reset()),
//   };
// };

const mapDispatch = {
  increment: counterActions.increment,
  decrement: counterActions.decrement,
  reset: counterActions.reset,
};
const connector = connect(mapState, mapDispatch); //HOC

export default connector(Counter);
