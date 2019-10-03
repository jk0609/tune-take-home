import React from 'react';
import MainGrid from '../views/MainGrid/MainGrid';
import renderer from 'react-test-renderer';

describe('MainGrid snapshot', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<MainGrid />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
