import React from 'react';

const Word = props => {
  console.log({props});
  return (
    <div className="word">
      <h1 id="word">
      IPA: { props.word.phoneticSpelling }
      </h1>
    </div>
  );
};

export default Word;
