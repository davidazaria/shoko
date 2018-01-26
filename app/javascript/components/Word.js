import React from 'react';
import Etymology from './Etymology';

const Word = props => {
  // console.log(props);
  return !props.word.results ? <h1> not a valid word </h1> : (
    <div className="word">
      <h1 id="ipa"> you entered the word {props.word.results[0].word}, which is pronounced {props.word.results[0].lexicalEntries[0].pronunciations[0].phoneticSpelling}.
      </h1>
      <Etymology />
    </div>
  );
};

export default Word;
