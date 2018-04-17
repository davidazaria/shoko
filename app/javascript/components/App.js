import React, { Component } from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import axios from 'axios';
import Shoko from './Shoko';
import Results from './Results';
import Header from './Header';
import Footer from './Footer';

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
  }

  newCall(newWord) {
    // console.log(newWord);
    axios.get(`/words/${newWord}`)
      .then(res => {
        this.setState({
          wordAPI: res.data.response_data,
          apiDataLoaded: true,
        });
      }).catch(err => console.log(err));
  }

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
    } else return;
  }

  render() {
    return (
        <div className="App">
          <Header />
          <h2 id="enter"> enter a word below to learn more! </h2>
          <div>
            <Shoko handleWord={this.handleWord} />
          </div>
          <main>
            {this.renderWord()}
            <Footer />
          </main>
        </div>
    );
  }
}

export default App;

