import React from 'react';
import GridCard from '../views/MainGrid/components/GridCard';
import renderer from 'react-test-renderer';

let mockProps = {
  avatar: 'test-avatar-path',
  name: 'Test User',
  occupation: 'Test Occupation',
  revenue: 100,
  impressions: {
    count: 20,
    times: new Array(20).map(e => '')
  },
  conversions: {
    count: 10,
    times: new Array(10).map(e => '')
  }
};

describe('GridCard snapshot', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<GridCard {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
