import React from 'react';

const Word = props => {
  console.log(props);
  return !props.word.results ? <h1> not a valid word </h1> : (
    <div className="word">
      <h1 id="ipa"> you entered the word {props.word.results[0].word}, which is pronounced {props.word.results[0].lexicalEntries[0].pronunciations[0].phoneticSpelling}.
      </h1>
      <h2 id="etymology">
      make another component
        its etymology is {props.word.results[0].lexicalEntries[0].entries[0].etymologies[0]}.
      </h2>
    </div>
  );
};

export default Word;
