import React from 'react';
import Grammar from './Grammar';

const Etymology = props => {
  return Object.keys(props.etymology.word.results[0].lexicalEntries[0].entries[0])[0] !== 'etymologies' ?
    <div>
      <h1> unfortunately, shoko does not have a known etymology for {props.etymology.word.results[0].word} at this time. check back soon! </h1>
      <Grammar grammar={props} />
    </div> : (
    <div className="word">
      <h1 id="etymology"> the etymology of {props.etymology.word.results[0].word} is {props.etymology.word.results[0].lexicalEntries[0].entries[0].etymologies[0]}. </h1>
      <Grammar grammar={props} />
      </div>
  );
};

export default Etymology;
