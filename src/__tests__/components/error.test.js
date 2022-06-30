/* eslint-disable no-unused-vars */
import React from 'react';
import renderer from 'react-test-renderer';
import error from '../../components/Error';

it('renders correctly', () => {
  const error = renderer.create(<error />).toJSON();
  expect(error).toMatchSnapshot();
});
