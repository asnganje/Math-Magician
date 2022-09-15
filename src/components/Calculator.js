import React, { useState } from 'react';
import '../style/calculator.css';
import calculate from './logic/calculate';

const Calculator = () => {
  const hookState = {
    total: 0,
    next: null,
    operation: null,
  };

  const [state, setState] = useState(hookState);

  const handleClick = (btn) => {
    const btnValue = btn.target.textContent;
    const newState = { ...state };
    setState(calculate(newState, btnValue));
  };

  return (
    <div className="myCalc">
      <div className="showCalc">
        {state.total}
        {state.operation}
        {state.next}
      </div>
      <div className="keyboardArea">
        <button
          type="button"
          onClick={handleClick}
          className="btn b0"
        >
          0
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="btn b1"
        >
          1
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="btn b2"
        >
          2
        </button>
        <button
          type="button"
          onClick={handleClick}
          className=" btn b3"
        >
          3
        </button>
        <button
          type="button"
          onClick={handleClick}
          className=" btn b4"
        >
          4
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="btn b5"
        >
          5
        </button>
        <button
          type="button"
          onClick={handleClick}
          className=" btn b6"
        >
          6
        </button>
        <button
          type="button"
          onClick={handleClick}
          className=" btn b7"
        >
          7
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="btn b8"
        >
          8
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="btn b9"
        >
          9
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="btn Add"
        >
          +
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="btn Minus"
        >
          -
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="btn Div"
        >
          ÷
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="btn Multiply"
        >
          x
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="btn Equal"
        >
          =
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="btn Percent"
        >
          %
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="btn Clear"
        >
          AC
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="btn plusMin"
        >
          +/-
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="btn Deci"
        >
          .
        </button>
      </div>
    </div>
  );
};

export default Calculator;
