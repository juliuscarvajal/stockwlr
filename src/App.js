import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StocksMachine from './components/StocksMachine';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>stockwlr</h1>
        </div>
        <StocksMachine />
      </div>
    );
  }
}

export default App;
