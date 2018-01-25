import React from 'react';

const Word = props => {
  console.log(typeof props.word.connection[0]);
  return (props.word.connection[0]) != 'Closed' ? (
    <div className="word">
      <h1 id="ipa"> you entered the word {props.word.results[0].word}, which is pronounced {props.word.results[0].lexicalEntries[0].pronunciations[0].phoneticSpelling}.
      </h1>
      <h2 id="etymology">
        its etymology is {props.word.results[0].lexicalEntries[0].entries[0].etymologies[0]}.
      </h2>
    </div>
  ) : (
    <div>
      <h1> not a valid word. please try again. </h1>
    </div>
  );
};

export default Word;
