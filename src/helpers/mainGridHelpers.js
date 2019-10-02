import logs from '../data/logs';
import users from '../data/users';

const importUsers = () => {
  // importedUsers acts as a hash table w/ user.id as the key
  let importedUsers = {};

  // Passing existing props for each user, adding empty props for revenue, conversions and impressions
  users.forEach(user => {
    importedUsers[user.id] = {
      ...user,
      revenue: 0,
      impressions: {
        count: 0,
        times: []
      },
      conversions: {
        count: 0,
        times: []
      }
    };
  });

  return importedUsers;
};

const parseLogs = () => {
  // Grabbing user hash table
  let userData = importUsers();

  // Iterating through logs, grabbing user and updating revenue and impression/conversion counts.
  // Time stamps for impressions/conversions are also saved.
  logs.forEach(log => {
    let user = userData[log.user_id];
    user[`${log.type}s`].count += 1;
    user[`${log.type}s`].times.push(log.time);
    //TODO: revenues are being saved as long floats
    user.revenue += log.revenue;
  });

  // Returns hash table converted to array
  return Object.values(userData);
};

export { parseLogs };
