import React, { Component } from 'react';
import Header from './Header';
import './index.scss';
import { userData, UserDataContex } from './userData-context';

class App extends Component {
  state = {
    userData,
  };

  render() {
    return (
      <div className="page">
        <UserDataContex.Provider value={this.state.userData}>
          <Header />
        </UserDataContex.Provider>
      </div>
    );
  }
}

export default App;
