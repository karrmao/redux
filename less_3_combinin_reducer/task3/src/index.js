/* eslint-disable spaced-comment */
import store from './store';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import { setUser } from './user.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(setLanguage('jp'));
//=> {cart: {…}, language: 'jp', user: null}
store.dispatch(addProduct({ id: 76, name: 'milk' }));
//=> {cart: {products: {id: 76, name: 'milk'}},...
//... language: 'jp', user: null}
console.log('REMOVE');
store.dispatch(removeProduct(76));
//=> {cart: {…}, language: 'jp', user: null}
console.log('ADD');
store.dispatch(setUser({ name: 'Bob' }));
//=> {cart: {…}, language: 'jp', user: {name: 'Bob'}}
console.log('ADD Potato');
store.dispatch(addProduct({ id: 10, name: 'Apple' }));
//=>{cart: {products: {id: 10, name: 'Apple'}}, language: 'jp', user: {name: 'Bob'}}
store.dispatch(setLanguage('pl'));
//=>{cart: {products: {id: 10, name: 'Apple'}}, language: 'pl', user: {name: 'Bob'}}
store.dispatch(setUser({ name: 'Anjey' }));
//=>{cart: {products: {id: 10, name: 'Apple'}}, language: 'pl', user: {name: 'Anjey'}}
