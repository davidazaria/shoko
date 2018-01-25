import React, { Component } from 'react';
import axios from 'axios';
import Shoko from './Shoko';
import Results from './Results';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentWord: null,
      apiDataLoaded: false,
      wordAPI: null,
    };
    this.handleWord = this.handleWord.bind(this);
    this.newCall = this.newCall.bind(this);
    // this.wordSubmit = this.wordSubmit.bind(this);
  }

  newCall(newWord) {
    console.log(newWord);
    axios.get(`/words/${newWord}`)
      .then(res => {
        this.setState({
          wordAPI: res.data.response_data,
          apiDataLoaded: true,
        });
      }).catch(err => console.log(err));
  }
  // wordSubmit(newWord, e) {
  //   e.preventDefault();
  //   fetch('/words', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(newWord),
  //   }).then(res => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       this.newCall();
  //     });
  // }

  handleWord(newWord) {
    this.setState({
      currentWord: newWord,
    });
    this.newCall(newWord);
  }

  renderWord() {
    if (this.state.apiDataLoaded) {
      return (<Results
        wordAPI={this.state.wordAPI}
            />);
    } else return <h2 id="enter"> enter a word above </h2>;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id="shokotitle">
            <h1>shoko (ˈʃoʊkoʊ)</h1>
          </div>
          <p id="subtitle"> discover the power of language with a simple click </p>
          <Shoko handleWord={this.handleWord} />
        </header>
        <main>
          {this.renderWord()}
        </main>
      </div>
    );
  }
}

export default App;
