import React, { Component } from 'react';

class Body extends Component {
  render() {
    return (
      <button id={this.props.id} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Body;
