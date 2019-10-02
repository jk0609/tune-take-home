import React from 'react';
import GridCard from './components/GridCard';

import { parseLogs } from '../../helpers/mainGridHelpers';

const MainGrid = () => {
  const generateUserCards = () => {
    let userData = parseLogs();
    // TODO: sort functionality here

    // Generates a GridCard component for each user, passing down user props
    return userData.map(user => <GridCard key={user.id} {...user} />);
  };

  return <div>{generateUserCards()}</div>;
};
export default MainGrid;
