import store from './store';
import {
  increment,
  decrement,
  reset,
} from './counter.actions';
import {
  addUser,
  deleteUser,
  updateUser,
} from './users.actions';

store.subscribe(() =>
  console.log(store.getState()),
);

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(reset());

store.dispatch(addUser({ id: 1, name: 'Tom' }));
store.dispatch(
  addUser({ id: 2, name: 'Vinton' }),
);
console.log('DELL');
store.dispatch(deleteUser(1));
console.log('UPDATE');
store.dispatch(
  updateUser(2, { name: 'Andy', age: 27 }),
);
store.dispatch(updateUser(2, { age: 40 }));
