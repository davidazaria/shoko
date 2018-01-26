import React from 'react';

const Definition = props => {
  console.log(props);
  return (
    <div className="word">
    <h1> the most common definition for {props.definition.etymology.word.results[0].word} is {props.definition.etymology.word.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]}.</h1>
    </div>
  );
};

export default Definition;
