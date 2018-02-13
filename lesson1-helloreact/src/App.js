import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Chào mừng các bạn</h1>
        </header>
        <p className="App-intro">
          Để bắt đầu , hãy sửa <code>src/App.js</code> chỉnh sửa và lưu lại.
        </p>
      </div>
    );
  }
}

export default App;
