import React from 'react';
import renderer from 'react-test-renderer';
import Quote from './Quote';

it('Renders Quote component', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
