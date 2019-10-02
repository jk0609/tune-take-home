import React from 'react';
import PropTypes from 'prop-types';

const GridCard = props => (
  <div>
    <h1>GridCard</h1>
    <p>{props.avatar}</p>
    <p>{props.name}</p>
    <p>{props.occupation}</p>
    <p>{props.revenue}</p>
    <p>{props.impressions.count}</p>
    <p>{props.conversions.count}</p>
  </div>
);

GridCard.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  occupation: PropTypes.string,
  revenue: PropTypes.number,
  impressions: PropTypes.object,
  conversions: PropTypes.object
};

export default GridCard;
