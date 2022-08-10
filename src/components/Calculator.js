import React, { useState } from 'react';
import calculate from '../logic/calculate';
import '../styles/Calculator.css';

const Calculator = () => {
  const [calculatorValues, setCalculator] = useState({ total: null, next: null, operation: null });

  const updateCalculator = (symbol) => {
    setCalculator((state) => calculate(state, symbol));
  };

  const { total, next, operation } = calculatorValues;

  const stateNull = () => !total && !next && !operation;
  const showOperation = () => {
    if (operation) return `${total} ${operation} ${next || ''}`;
    return next || total;
  };

  return (
    <div className="calculator-container">
      <h2 className="section-title">Let&apos;s do some math!</h2>
      <div className="calculator">
        <div className="input">{stateNull() ? '0' : showOperation()}</div>
        <div className="calculator-body">
          <button className="calculator-buttons" type="button" onClick={() => { updateCalculator('AC'); }}>AC</button>
          <button className="calculator-buttons" type="button" onClick={() => { updateCalculator('+/-'); }}>+/-</button>
          <button className="calculator-buttons" type="button" onClick={() => { updateCalculator('%'); }}>%</button>
          <button className="calculator-buttons operation" type="button" onClick={() => { updateCalculator('÷'); }}>÷</button>
          <button className="calculator-buttons" type="button" onClick={() => { updateCalculator('7'); }}>7</button>
          <button className="calculator-buttons" type="button" onClick={() => { updateCalculator('8'); }}>8</button>
          <button className="calculator-buttons" type="button" onClick={() => { updateCalculator('9'); }}>9</button>
          <button className="calculator-buttons operation" type="button" onClick={() => { updateCalculator('x'); }}>x</button>
          <button className="calculator-buttons" type="button" onClick={() => { updateCalculator('4'); }}>4</button>
          <button className="calculator-buttons" type="button" onClick={() => { updateCalculator('5'); }}>5</button>
          <button className="calculator-buttons" type="button" onClick={() => { updateCalculator('6'); }}>6</button>
          <button className="calculator-buttons operation" type="button" onClick={() => { updateCalculator('-'); }}>-</button>
          <button className="calculator-buttons" type="button" onClick={() => { updateCalculator('1'); }}>1</button>
          <button className="calculator-buttons" type="button" onClick={() => { updateCalculator('2'); }}>2</button>
          <button className="calculator-buttons" type="button" onClick={() => { updateCalculator('3'); }}>3</button>
          <button className="calculator-buttons operation" type="button" onClick={() => { updateCalculator('+'); }}>+</button>
          <button className="calculator-buttons cero-button" type="button" onClick={() => { updateCalculator('0'); }}>0</button>
          <button className="calculator-buttons" type="button" onClick={() => { updateCalculator('.'); }}>.</button>
          <button className="calculator-buttons operation" type="button" onClick={() => { updateCalculator('='); }}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
