import React from 'react';
import '../styles/Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  render() {
    const { value } = this.state;
    return (
      <div className="calculator">
        <div className="input">{value}</div>
        <div className="calculator-body">
          <button className="calculator-buttons" type="button">AC</button>
          <button className="calculator-buttons" type="button">+/&minus;</button>
          <button className="calculator-buttons" type="button">%</button>
          <button className="calculator-buttons operation" type="button">&divide;</button>
          <button className="calculator-buttons" type="button">7</button>
          <button className="calculator-buttons" type="button">8</button>
          <button className="calculator-buttons" type="button">9</button>
          <button className="calculator-buttons operation" type="button">&times;</button>
          <button className="calculator-buttons" type="button">4</button>
          <button className="calculator-buttons" type="button">5</button>
          <button className="calculator-buttons" type="button">6</button>
          <button className="calculator-buttons operation" type="button">&minus;</button>
          <button className="calculator-buttons" type="button">1</button>
          <button className="calculator-buttons" type="button">2</button>
          <button className="calculator-buttons" type="button">3</button>
          <button className="calculator-buttons operation" type="button">+</button>
          <button className="calculator-buttons cero-button" type="button">0</button>
          <button className="calculator-buttons" type="button">.</button>
          <button className="calculator-buttons operation" type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
