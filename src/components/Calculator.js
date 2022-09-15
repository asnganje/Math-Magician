import React from 'react';
import '../style/calculator.css';
import calculate from './logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btn) {
    const btnValue = btn.target.textContent;
    this.setState((e) => calculate(e, btnValue));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="myCalc">
        <div className="showCalc">
          {total}
          {operation}
          {next}
        </div>
        <div className="keyboardArea">
          <button
            type="button"
            onClick={this.handleClick}
            className="btn b0"
          >
            0
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn b1"
          >
            1
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn b2"
          >
            2
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className=" btn b3"
          >
            3
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className=" btn b4"
          >
            4
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn b5"
          >
            5
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className=" btn b6"
          >
            6
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className=" btn b7"
          >
            7
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn b8"
          >
            8
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn b9"
          >
            9
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn Add"
          >
            +
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn Minus"
          >
            -
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn Div"
          >
            ÷
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn Multiply"
          >
            x
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn Equal"
          >
            =
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn Percent"
          >
            %
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn Clear"
          >
            AC
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn plusMin"
          >
            +/-
          </button>
          <button
            type="button"
            onClick={this.handleClick}
            className="btn Deci"
          >
            .
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
