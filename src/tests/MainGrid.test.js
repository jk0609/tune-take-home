import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import MainGrid from '../views/MainGrid/MainGrid';

configure({ adapter: new Adapter() });

jest.mock('../data/users', () => [
  {
    name: 'Charlie S. Gerardi',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg',
    id: 0,
    occupation: 'Residential electrician'
  }
]);

jest.mock('../data/logs', () => [
  {
    time: '2013-04-19 15:26:10',
    type: 'conversion',
    user_id: 0,
    revenue: 10
  },
  {
    time: '2013-04-24 19:20:09',
    type: 'impression',
    user_id: 0,
    revenue: 0
  },
  {
    time: '2013-04-16 07:20:32',
    type: 'impression',
    user_id: 0,
    revenue: 0
  }
]);

let wrapper;

beforeEach(() => {
  wrapper = shallow(<MainGrid />);
});

describe('MainGrid snapshot', () => {
  it('should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
