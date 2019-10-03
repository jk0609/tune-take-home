import { importUsers, parseLogs } from '../helpers/mainGridHelpers';

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
    expect(user.revenue).toEqual(15);
    expect(user.impressions.count).toEqual(1);
    expect(user.impressions.times).toHaveLength(1);
    expect(user.conversions.count).toEqual(1);
    expect(user.conversions.times).toHaveLength(1);
  });
});