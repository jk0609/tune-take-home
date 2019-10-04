import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import GridCard from '../views/MainGrid/components/GridCard';

configure({ adapter: new Adapter() });

jest.mock('react-chartjs-2', () => ({
  Line: () => null
}));

let wrapper;

let mockProps = {
  avatar: 'test-avatar-path',
  name: 'Test User',
  occupation: 'Test Occupation',
  revenue: 100,
  impressions: 20,
  conversions: {
    count: 10,
    graphData: {}
  }
};

beforeEach(() => {
  wrapper = shallow(<GridCard {...mockProps} />);
});

describe('GridCard snapshot', () => {
  it('should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
