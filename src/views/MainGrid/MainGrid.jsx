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
  let [sortProp, changeSortProp] = useState('name');

  const generateUserCards = () => {
    // Calls sort helper, passing in name of prop to sort by
    let sortedUserData = sortByProp(sortProp, userData);

    // Generates a GridCard component for each user, passing down user props
    return sortedUserData.map(user => <GridCard key={user.id} {...user} />);
  };

  return (
    <StyledMainGridWrapper>
      <label htmlFor="sort-dropdown">
        Sort results by:
        <select
          id="sort-dropdown"
          onChange={e => changeSortProp(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="impressions">Impressions</option>
          <option value="conversions">Conversions</option>
          <option value="revenue">Revenue</option>
        </select>
      </label>
      <div className="main-grid">{generateUserCards()}</div>
    </StyledMainGridWrapper>
  );
};
export default MainGrid;
