import React from 'react';
import NewShoko from './NewShoko';

export default class Shoko extends React.Component {
  render() {
    return (
      <div className="Shoko">
      <h2>This is my Shoko component</h2>
      <NewShoko />
      </div>
    );
  }
}
