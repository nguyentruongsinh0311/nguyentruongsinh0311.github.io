import React, { Component } from 'react';
import logo from './logo.svg';


class Demo extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Noi dung react</h1>
        </header>
        <p className="App-intro">
          alo 123
        </p>
      </div>
    );
  }
}

export default Demo;
