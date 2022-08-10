import calculate from './calculate';

describe('Checks if the calculate function works', () => {
  const nullObj = {
    total: null,
    next: null,
    operation: null,
  };

  test('Check if the AC button returns null', () => {
    const obj = {
      total: 1,
      next: null,
      operation: null,
    };
    expect(calculate(obj, 'AC')).toStrictEqual(nullObj);
  });

  test('Check if the = operator returns the operation results', () => {
    const obj2 = {
      total: 1,
      next: 3,
      operation: '+',
    };
    expect(calculate(obj2, '=')).toStrictEqual({ next: null, operation: null, total: '4' });
  });

  test('Check if the operator . allows you to create decimals', () => {
    expect(calculate(nullObj, '.')).toStrictEqual({ next: '0.', operation: null, total: null });
  });

  test(' Check if the + - / operators return a the number with a different symbol when you click on it ', () => {
    const obj3 = {
      total: null,
      next: 1,
      operation: null,
    };
    expect(calculate(obj3, '+/-')).toStrictEqual({ next: '-1', operation: null, total: null });
  });
});
