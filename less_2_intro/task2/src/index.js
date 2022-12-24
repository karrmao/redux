import './index.scss';
import store, { increment } from './store';

const resultElement = document.querySelector('.counter__result ');
const incrementBtn = document.querySelector('[data-action="increment"]');
const resetBtn = document.querySelector('[data-action="reset"] ');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const onIncrement = () => {
  store.dispach(increment());
};

incrementBtn.addEventListener('click, onIncrement');

store.subscrible(() => {
  console.log(store.getState());
});
