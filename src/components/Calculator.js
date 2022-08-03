import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    // Lifting State up in ReactJS
    this.updateCalculator = this.updateCalculator.bind(this);
  }

  updateCalculator = (symbol) => {
    this.setState((prevState) => (calculate(prevState, symbol)));
  }

  render() {
    const { total, next, operation } = this.state;
    const stateNull = () => !total && !next && !operation;
    const showResult = () => {
      if (operation) return `${total} ${operation} ${next || ''}`;
      return next || total;
    };
    return (
      <div className="calculator">
        <div className="input">{stateNull() ? '0' : showResult()}</div>
        <div className="calculator-body">
          <button className="calculator-button" type="button" onClick={() => { this.updateCalculator('AC'); }}>AC</button>
          <button className="calculator-button" type="button" onClick={() => { this.updateCalculator('+/-'); }}>+/-</button>
          <button className="calculator-button" type="button" onClick={() => { this.updateCalculator('%'); }}>%</button>
          <button className="calculator-button operation" type="button" onClick={() => { this.updateCalculator('÷'); }}>÷</button>
          <button className="calculator-button" type="button" onClick={() => { this.updateCalculator('7'); }}>7</button>
          <button className="calculator-button" type="button" onClick={() => { this.updateCalculator('8'); }}>8</button>
          <button className="calculator-button" type="button" onClick={() => { this.updateCalculator('9'); }}>9</button>
          <button className="calculator-button operation" type="button" onClick={() => { this.updateCalculator('x'); }}>x</button>
          <button className="calculator-button" type="button" onClick={() => { this.updateCalculator('4'); }}>4</button>
          <button className="calculator-button" type="button" onClick={() => { this.updateCalculator('5'); }}>5</button>
          <button className="calculator-button" type="button" onClick={() => { this.updateCalculator('6'); }}>6</button>
          <button className="calculator-button operation" type="button" onClick={() => { this.updateCalculator('-'); }}>-</button>
          <button className="calculator-button" type="button" onClick={() => { this.updateCalculator('1'); }}>1</button>
          <button className="calculator-button" type="button" onClick={() => { this.updateCalculator('2'); }}>2</button>
          <button className="calculator-button" type="button" onClick={() => { this.updateCalculator('3'); }}>3</button>
          <button className="calculator-button operation" type="button" onClick={() => { this.updateCalculator('+'); }}>+</button>
          <button className="calculator-button cero-button" type="button" onClick={() => { this.updateCalculator('0'); }}>0</button>
          <button className="calculator-button" type="button" onClick={() => { this.updateCalculator('.'); }}>.</button>
          <button className="calculator-button operation" type="button" onClick={() => { this.updateCalculator('='); }}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
