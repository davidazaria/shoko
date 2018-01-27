import React from 'react';

const Grammar = props => {
  console.log(props);
  return (
    <div className="word">
    <h1> and the most common grammatical class for {props.grammar.etymology.word.results[0].word} is {props.grammar.etymology.word.results[0].lexicalEntries[0].lexicalCategory}.</h1>
    </div>
  );
};

export default Grammar;
