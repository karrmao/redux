/* eslint-disable prettier/prettier */
/* eslint-disable spaced-comment */
import store from './store';
import { increment, decrement, reset } from './counter.actions';
import { addUser, deleteUser, updateUser } from './users.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment()); //=> 1
store.dispatch(increment()); //=> 2
store.dispatch(increment()); //=> 3
store.dispatch(decrement()); //=> 2
store.dispatch(reset()); //=> 0
console.log('ADD');
store.dispatch(addUser({ id: 1, name: 'Tom' })); //=> {counter: 0, users: usersList:  {id: 1, name: 'Tom'}}
store.dispatch(addUser({ id: 2, name: 'Vinton' }));
//=> {counter: 0, users: usersList:  {id: 1, name: 'Tom'}, {id: 2, name: 'Vinton'}}
console.log('DELL');
store.dispatch(deleteUser(1)); //=> {counter: 0, users: usersList:  {id: 2, name: 'Vinton'}}
console.log('UPDATE');
store.dispatch(updateUser(2, { name: 'Andy', age: 27 })); //=> {counter: 0, users: usersList:  {id: 2, name: 'Andy', age: 27}}
store.dispatch(updateUser(2, { age: 40 })); //=> {counter: 0, users: usersList:  {id: 2, name: 'Andy', age: 40}}
