import React, { Component } from 'react';

class Display extends Component {
  render() {
    const { value } = this.props;
    return <input value={value} id="input" type="text" readOnly />;
  }
}

export default Display;
