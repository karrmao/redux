import store from './store';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import { setUser } from './user.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(setLanguage('jp'));
store.dispatch(addProduct({ id: 76, name: 'milk' }));
console.log('REMOVE');
store.dispatch(removeProduct(76));
console.log('ADD');
store.dispatch(setUser({ name: 'Bob' }));
console.log('ADD Potato');
store.dispatch(addProduct({ id: 10, name: 'Peter' }));
store.dispatch(setLanguage('pl'));
store.dispatch(setUser({ name: 'Anjey' }));
