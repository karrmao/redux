/* eslint-disable spaced-comment */
import store from './store';
import { addUser, deleteUser } from './users.actions';

store.dispatch(addUser({ name: 'David', id: 1 }));
store.dispatch(addUser({ name: 'Bob', id: 2 }));
store.dispatch(addUser({ name: 'Tom', id: 3 }));
store.dispatch(addUser({ name: 'Dell', id: 4 }));

store.dispatch(deleteUser(4));

console.log(store.getState());
//.getState - показує що в обєкті зберігається
console.log(store);
//.dispatch - допомагає впливати на actionS в store
//action - буде ddUser та deleteUser

//не воркає
// store.subscribe(() => {
//   console.log(store.getState());
// });
