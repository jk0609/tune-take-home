// import React from 'react';
import React, { useState } from 'react';
import GridCard from './components/GridCard';
import logs from '../../data/logs';
import users from '../../data/users';
import { parseLogs, sortByProp } from '../../helpers/mainGridHelpers';

const userData = parseLogs(users, logs);

const MainGrid = () => {
  let [filter, changeFilter] = useState('name');

  const generateUserCards = () => {
    // Calls sort helper, passing in name of prop to sort by
    let sortedUserData = sortByProp(filter, userData);

    // Generates a GridCard component for each user, passing down user props
    return sortedUserData.map(user => <GridCard key={user.id} {...user} />);
  };

  return (
    <div>
      <button onClick={() => changeFilter('name')}>Name</button>
      <button onClick={() => changeFilter('impressions')}>Impressions</button>
      <button onClick={() => changeFilter('conversions')}>Conversions</button>
      {generateUserCards()}
    </div>
  );
};
export default MainGrid;
