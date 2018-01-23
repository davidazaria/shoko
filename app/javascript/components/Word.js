import React from 'react';

const Word = props => {
  console.log({ props });
  return (
    <div className="word">
      <h1 id="ipa"> you entered the word {props.word.results[0].id}, which is pronounced {props.word.results[0].lexicalEntries[0].pronunciations[0].phoneticSpelling}.
      </h1>
    </div>
  );
};

export default Word;
