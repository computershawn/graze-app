import React, { Component } from 'react';
import './App.css';
import MarketList from './components/marketList/MarketList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MarketList />
        </header>
      </div>
    );
  }
}

export default App;
