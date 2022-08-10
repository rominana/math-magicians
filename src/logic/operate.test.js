import operate from './operate';

describe('Checks the operation modules (sum, substraction, division, multiplication)', () => {
  test('Checks the sum of two numbers', () => {
    expect(operate(2, 2, '+')).toBe('4');
  });

  test('Checks the substraction of two numbers', () => {
    expect(operate(6, 3, '-')).toBe('3');
  });

  test('Checks the multiplication of two numbers', () => {
    expect(operate(2, 2, 'x')).toBe('4');
  });

  test('Checks the division of two numbers', () => {
    expect(operate(20, 2, '÷')).toBe('10');
  });

  test('Checks the division can\'t be done by 0', () => {
    expect(operate(100, 0, '÷')).toBe("Can't divide by 0.");
  });

  test('Checks the module of two numbers', () => {
    expect(operate(6, 2, '%')).toBe('0');
  });

  test('Checks the module of two numbers', () => {
    expect(operate(100, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
