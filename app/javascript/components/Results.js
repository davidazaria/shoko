import React from 'react';
import Word from './Word';

const Results = props => {
  return (
    <div className="results">
      <Word
        word={props.wordAPI}
      />
    </div>
  );
};

export default Results;
