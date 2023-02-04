/* eslint-disable spaced-comment */
import { store, increment, decrement } from './counter';

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment()); //=> 1 (+)
store.dispatch(increment()); //=> 2 (+)
store.dispatch(increment()); //=> 3 (+)
store.dispatch(decrement()); //=> 2 (-)
store.dispatch(decrement()); //=> 1 (-)
