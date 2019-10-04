const importUsers = users => {
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

const parseLogs = (users, logs) => {
  // Grabbing user hash table
  let userData = importUsers(users);

  // Iterating through logs, grabbing user and updating revenue and impression/conversion counts.
  // Time stamps for impressions/conversions are also saved.
  logs.forEach(log => {
    let user = userData[log.user_id];
    user[`${log.type}s`].count += 1;
    user[`${log.type}s`].times.push(log.time);
    user.revenue += log.revenue;
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
  // Sort by descending revenue
  else if (propName === 'revenue') {
    sortFunction = (a, b) => b.revenue - a.revenue;
  }
  // Sort by either descending impressions or conversions
  else {
    sortFunction = (a, b) => b[propName].count - a[propName].count;
  }

  return userData.sort(sortFunction);
};

export { importUsers, parseLogs, sortByProp };
