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
      apiKey: 'b9ac47fb6c92bee2693f2cbb507ff74a',
    };
    this.handleWord = this.handleWord.bind(this);
    this.newCall = this.newCall.bind(this);
  }

  componentDidMount() {
    this.newCall(this.state.currentWord);
  }

  newCall(newWord) {
    axios.get(`https://od-api.oxforddictionaries.com:443/api/v1/entries/en/ace/synonyms`)
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
    } else return <h1> enter in a word to learn more about it </h1>;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
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
