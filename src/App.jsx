import React, { Component } from 'react';
import Display from './Display';
import Body from './Body';
import { isMinus, isSymbol, isNumber } from './service';

class App extends Component {
  state = {
    input: ''
  };

  clearAll = () => {
    this.setState({
      input: ''
    });
  };

  clear = () => {
    this.setState({
      input: this.state.input.substr(0, this.state.input.length - 1)
    });
  };

  equals = () => {
    let ev = eval(this.state.input);

    this.setState({
      input: ev ? ev.toString() : this.state.input
    });
  };

  add = char => {
    if (this.canAdd(char)) {
      this.setState({
        input: this.state.input.concat(char)
      });
    }
  };

  canAdd = char => {
    let input = this.state.input;

    if (isNumber(char)) {
      return true;
    } else if (
      isSymbol(char) &&
      input.trim() != '' &&
      isNumber(input[input.length - 1])
    ) {
      return true;
    }
    return false;
  };

  render() {
    const { clearAll, clear, equals, add } = this;
    const { input } = this.state;

    return (
      <div className="display">
        <Display value={input} />
        <Body clearAll={clearAll} clear={clear} equals={equals} add={add} />
      </div>
    );
  }
}

export default App;
