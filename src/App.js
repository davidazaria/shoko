import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Shoko from './components/Shoko';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Shoko />
      </div>
    );
  }
}

export default App;
