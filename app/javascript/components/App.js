import React from 'react';
import Shoko from './Shoko';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
      <h1>This is the App component which will act as the parent/master component, that sits within Shoko index.html.erb</h1>
      <Shoko/>
      </div>
    );
  }
}
