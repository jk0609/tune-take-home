import React, { useState } from 'react';
// Data and helper functions
import logs from '../../data/logs';
import users from '../../data/users';
import { parseLogs, sortByProp } from '../../helpers/mainGridHelpers';

// Components
import GridCard from './components/GridCard';
import StyledMainGridWrapper from './styledComponents/StyledMainGridWrapper';

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
    <StyledMainGridWrapper>
      <button onClick={() => changeFilter('name')}>Name</button>
      <button onClick={() => changeFilter('impressions')}>Impressions</button>
      <button onClick={() => changeFilter('conversions')}>Conversions</button>
      <div className="main-grid">{generateUserCards()}</div>
    </StyledMainGridWrapper>
  );
};
export default MainGrid;
