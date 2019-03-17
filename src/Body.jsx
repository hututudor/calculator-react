import React, { Component } from 'react';
import Button from './Button';

class Body extends Component {
  render() {
    const { clearAll, clear, equals, add } = this.props;
    return (
      <React.Fragment>
        <div>
          <Button id="CA" onClick={clearAll}>
            CA
          </Button>
          <Button id="C" onClick={clear}>
            C
          </Button>
          <Button id="I" onClick={() => add('/')}>
            /
          </Button>
        </div>
        <div>
          <Button id="7" onClick={() => add('7')}>
            7
          </Button>
          <Button id="8" onClick={() => add('8')}>
            8
          </Button>
          <Button id="9" onClick={() => add('9')}>
            9
          </Button>
          <Button id="O" onClick={() => add('*')}>
            *
          </Button>
        </div>
        <div>
          <Button id="4" onClick={() => add('4')}>
            4
          </Button>
          <Button id="5" onClick={() => add('5')}>
            5
          </Button>
          <Button id="6" onClick={() => add('6')}>
            6
          </Button>
          <Button id="M" onClick={() => add('-')}>
            -
          </Button>
        </div>
        <div>
          <Button id="1" onClick={() => add('1')}>
            1
          </Button>
          <Button id="2" onClick={() => add('2')}>
            2
          </Button>
          <Button id="3" onClick={() => add('3')}>
            3
          </Button>
          <Button id="P" onClick={() => add('+')}>
            +
          </Button>
        </div>
        <div>
          <Button id="Z" onClick={() => add('0')}>
            0
          </Button>
          <Button id="." onClick={() => add('.')}>
            .
          </Button>
          <Button id="E" onClick={equals}>
            =
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default Body;
