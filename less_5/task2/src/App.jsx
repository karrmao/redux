import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
// eslint-disable-next-line import/named
import { TransferList } from './options/TransferList';

const App = () => {
  return (
    <Provider store={store}>
      <TransferList />
    </Provider>
  );
};

export default App;
