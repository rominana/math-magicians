import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator tests', () => {
  it('Renders Calculator component', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('simulate user interaction with the calculator: 3', () => {
    render(<Calculator />);
    const keyThree = screen.getByText('3');
    const input = document.querySelector('.input');
    fireEvent.click(keyThree);
    expect(input.textContent).toBe('3');
  });

  it('simulate the user interaction with the calculator: 7.4', () => {
    render(<Calculator />);
    const keySeven = screen.getByText('7');
    const keyDot = screen.getByText('.');
    const keyFour = screen.getByText('4');
    const input = document.querySelector('.input');
    fireEvent.click(keySeven);
    fireEvent.click(keyDot);
    fireEvent.click(keyFour);
    expect(input.textContent).toBe('7.4');
  });
});
