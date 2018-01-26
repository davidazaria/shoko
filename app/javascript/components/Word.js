import React from 'react';
import Etymology from './Etymology';

const Word = props => {
  return !props.word.results ? <h1> not a valid word. please enter another word above. </h1> : (
    <div className="word">
      <h1 id="ipa"> you entered the word {props.word.results[0].word}, which in english is pronounced {props.word.results[0].lexicalEntries[0].pronunciations[0].phoneticSpelling}.
      </h1>
      <Etymology etymology={props} />
    </div>
  );
};

export default Word;
