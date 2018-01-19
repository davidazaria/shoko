import React from 'react';
import NewShoko from './NewShoko';

export default class Shoko extends React.Component {
  render() {
    return (
      <div className="Shoko">
        <h3>This is the Shoko component embedded within App component</h3>
        <form>
        <label> enter words:
          <input type="text" words="words" />
        </label>
       <input type="submit" value="submit" />
        </form>
          <NewShoko />
      </div>
    );
  }
}
