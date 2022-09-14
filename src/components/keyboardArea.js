import React from 'react';
import '../style/keyboardArea.css';

class KeyboardArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="keyboardArea">
        <button type="button" className="btn b0">
          0
        </button>
        <button type="button" className="btn b1">
          1
        </button>
        <button type="button" className="btn b2">
          2
        </button>
        <button type="button" className="btn b3">
          3
        </button>
        <button type="button" className="btn b4">
          4
        </button>
        <button type="button" className="btn b5">
          5
        </button>
        <button type="button" className="btn b6">
          6
        </button>
        <button type="button" className="btn b7">
          7
        </button>
        <button type="button" className="btn b8">
          8
        </button>
        <button type="button" className="btn b9">
          9
        </button>
        <button type="button" className="btn Add">
          +
        </button>
        <button type="button" className="btn Minus">
          -
        </button>
        <button type="button" className="btn Div">
          /
        </button>
        <button type="button" className="btn Multiply">
          X
        </button>
        <button type="button" className="btn Equal">
          =
        </button>
        <button type="button" className="btn Percent">
          %
        </button>
        <button type="button" className="btn Clear">
          AC
        </button>
        <button type="button" className="btn plusMin">
          +/-
        </button>
        <button type="button" className="btn Deci">
          .
        </button>
      </div>
    );
  }
}
export default KeyboardArea;
