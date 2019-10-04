/* eslint-disable */
import { importUsers, parseLogs, sortByProp } from '../helpers/mainGridHelpers';

// mock users
const mockUser = [
  {
    name: 'Test User',
    avatar: 'test-avatar',
    id: 0,
    occupation: 'Test occupation'
  }
];

// mock log entries
const mockId = mockUser[0].id;
const mockLogs = [
  {
    time: '2013-04-19 15:26:10',
    type: 'impression',
    user_id: mockId,
    revenue: 0
  },
  {
    time: '2013-04-19 15:26:20',
    type: 'conversion',
    user_id: mockId,
    revenue: 15
  },
  {
    time: '2013-04-19 15:26:30',
    type: 'conversion',
    user_id: mockId,
    revenue: 8
  }
];

describe('importUsers', () => {
  it('should return a hash table of users populated with users from users.json', () => {
    let user = importUsers(mockUser)[0];
    expect(user.name).toEqual('Test User');
    expect(user.occupation).toEqual('Test occupation');
  });
});

describe('parseLogs', () => {
  it('should return an array of users populated with revenue, impressions and conversion data', () => {
    let user = parseLogs(mockUser, mockLogs)[0];
    expect(user.revenue).toEqual(23);
    expect(user.impressions).toEqual(1);
    expect(user.conversions.count).toEqual(2);
    expect(user.conversions.graphData).toEqual({ '04/19': 23 });
  });
});

describe('sortByProp', () => {
  it('should return array of sorted users', () => {
    let unsortedUsers = [
      {
        name: 'Test A',
        impressions: 0,
        conversions: { count: 0 },
        revenue: 10
      },
      {
        name: 'Test B',
        impressions: 10,
        conversions: { count: 0 },
        revenue: 0
      },
      {
        name: 'Test C',
        impressions: 0,
        conversions: { count: 10 },
        revenue: 0
      }
    ];

    expect(sortByProp('name', unsortedUsers)[0].name).toEqual('Test A');
    expect(sortByProp('impressions', unsortedUsers)[0].impressions).toEqual(10);
    expect(
      sortByProp('conversions', unsortedUsers)[0].conversions.count
    ).toEqual(10);
    expect(sortByProp('name', unsortedUsers)[0].revenue).toEqual(10);
  });
});
