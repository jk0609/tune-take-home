import moment from 'moment';

const importUsers = users => {
  // importedUsers acts as a hash table w/ user.id as the key
  let importedUsers = {};

  // Passing existing props for each user, adding empty props for revenue, conversions and impressions.
  users.forEach(user => {
    importedUsers[user.id] = {
      ...user,
      revenue: 0,
      impressions: 0,
      conversions: {
        count: 0,
        graphData: {}
      }
    };
  });

  return importedUsers;
};

const parseLogs = (users, logs) => {
  // Grabbing user hash table
  let userData = importUsers(users);

  // Iterating through logs, grabbing user and updating revenue and impression/conversion counts.
  // Dates and revenue/day for conversions are also saved.
  logs.forEach(log => {
    let user = userData[log.user_id];
    user.revenue += log.revenue;
    if (log.type === 'impression') {
      user.impressions += 1;
    }
    // if log type is a conversion, increment the conversion count, get the date in MM/DD format and track daily revenue in user.conversions.graphDate
    else {
      user.conversions.count += 1;
      let logDate = moment(log.time).format('MM/DD');
      let { graphData } = user.conversions;
      if (!graphData[logDate]) graphData[logDate] = 0;
      graphData[logDate] += log.revenue;
    }
  });

  // Returns hash table converted to array
  return Object.values(userData);
};

// Sorts user data based on property to be sorted on
const sortByProp = (propName, userData) => {
  let sortFunction;
  // Sorts names alphabetically by first name, then last name
  if (propName === 'name') {
    sortFunction = (a, b) => {
      const [firstNameA, lastNameA] = a.name.split(' ');
      const [firstNameB, lastNameB] = b.name.split(' ');
      if (firstNameA < firstNameB) return -1;
      if (firstNameA > firstNameB) return 1;
      if (lastNameA < lastNameB) return -1;
      if (lastNameA > lastNameB) return 1;
      return 0;
    };
  }
  // Sort by descending conversions
  else if (propName === 'conversions') {
    sortFunction = (a, b) => b[propName].count - a[propName].count;
  }
  // Sort by descending revenue or impressions
  else {
    sortFunction = (a, b) => b[propName] - a[propName];
  }

  return userData.sort(sortFunction);
};

export { importUsers, parseLogs, sortByProp };
