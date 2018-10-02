import React, { Component } from 'react';
import Playlist from './playlist';
import Main from './main';
import './app.less';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Main />
        <Playlist />
      </div>
    );
  }
}

export default App;
