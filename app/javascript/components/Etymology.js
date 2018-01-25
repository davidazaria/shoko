import React from 'react';

const Etymology = props => {
  console.log(props);
  return props.word.results[0].lexicalEntries[0].entries[0].etymologies[0] === 'etymologies' ?
  <h1> hi </h1> : ( <h1> this worked </h1>
  );
};
export default Etymology;

      // <h2 id="etymology">
      // make another component
      //   its etymology is {props.word.results[0].lexicalEntries[0].entries[0].etymologies[0]}.
      // </h2>

//   console.log(props);
//   return !props.word.results ? <h1> not a valid word </h1> : (
//     <div className="word">
//       <h1 id="ipa"> you entered the word {props.word.results[0].word}, which is pronounced {props.word.results[0].lexicalEntries[0].pronunciations[0].phoneticSpelling}.
//       </h1>
//       <Etymology />
//     </div>
//   );
// };
