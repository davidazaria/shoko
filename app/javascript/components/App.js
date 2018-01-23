import React, { Component } from 'react';
import axios from 'axios';
import Shoko from './Shoko';
import Results from './Results';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentWord: "word",
      apiDataLoaded: false,
      wordAPI: null,
    };
    this.handleWord = this.handleWord.bind(this);
    this.newCall = this.newCall.bind(this);
  }

  // componentDidMount() {
  //   this.newCall(this.state.currentWord);
  // }

  newCall(newWord) {
    console.log(newWord);
    axios.get(`/words/${newWord}`)
      .then(res => {
        this.setState({
          wordAPI: res.data,
          apiDataLoaded: true,
        });
      }).catch(err => console.log(err));
  }

  handleWord(newWord) {
    this.setState({
      currentWord: newWord,
    });
    console.log(`currentWord is ${this.state.currentWord} but I expect it to be ${newWord}`);
    this.newCall(newWord);
  }

  renderWord() {
    if (this.state.apiDataLoaded) {
      return (<Results
        wordAPI={this.state.wordAPI} />);
    } else return <h1> enter a word above </h1>;
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
