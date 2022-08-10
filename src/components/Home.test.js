import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

it('Renders Home component correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
