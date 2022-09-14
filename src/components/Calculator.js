import React from 'react';
import '../style/calculator.css';
import KeyPad from './keyboardArea';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="myCalc">
        <p className="showCalc">0</p>
        <KeyPad />
      </div>
    );
  }
}

export default Calculator;
