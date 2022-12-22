import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
  // state = {
  //   theme: themes.light,
  // };

  // toggleTheme = () => {
  //   const newTheme =
  //     this.state.theme === themes.dark ? themes.light : themes.dark;

  //   this.setState({ theme: newTheme });
  // };
  render() {
    return (
      <div className="page">
        <Header />
      </div>
    );
  }
}

export default App;
