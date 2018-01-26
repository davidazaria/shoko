import React from 'react';

const Etymology = props => {
  console.log(props.etymology.word.results[0].lexicalEntries[0].entries[0]);
  return !props.etymology.word.results[0].lexicalEntries[0].entries[0] !== 'etymologies' ?
  <h1> no known etymology for this word at this time </h1> : (
    <div className="word">
      <h1 id="etymology"> the etymology of this word is {props.etymology.word.results[0].lexicalEntries[0].entries[0].etymologies[0]} </h1>
      </div>
  );
};

export default Etymology;
