import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

it('should render the correct content for the Calculator Page', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
