import React from 'react';
import GridCard from './components/GridCard';
import logs from '../../data/logs';
import users from '../../data/users';

import { parseLogs } from '../../helpers/mainGridHelpers';

const MainGrid = () => {
  const generateUserCards = () => {
    let userData = parseLogs(users, logs);
    // TODO: sort functionality here

    // Generates a GridCard component for each user, passing down user props
    return userData.map(user => <GridCard key={user.id} {...user} />);
  };

  return <div>{generateUserCards()}</div>;
};
export default MainGrid;
