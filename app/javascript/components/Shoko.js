import React, { Component } from 'react';

class Shoko extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    this.props.handleWord(this.state.value);
    e.preventDefault();
    this.setState({
      value: this.state.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="search">
            <label>
              enter a new word:
              <input type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
          <input type="submit" value="click" />
        </form>
      </div>
    );
  }
}

export default Shoko;
