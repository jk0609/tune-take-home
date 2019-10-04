import React from 'react';
import PropTypes from 'prop-types';
import { startCase } from 'lodash';

import StyledGridCardWrapper from '../styledComponents/StyledGridCardWrapper';

// TODO: If no avatar, show first letter of first name
const GridCard = props => (
  <StyledGridCardWrapper>
    <div className="card-header">
      <div className="card-avatar">
        {props.avatar ? (
          <img src={props.avatar} />
        ) : (
          <span>{props.name[0]}</span>
        )}
      </div>
      <div className="card-name">
        <h4>{props.name}</h4>
        <p>{startCase(props.occupation)}</p>
      </div>
    </div>
    <div className="card-body">
      <div className="card-graph">
        <div>Graph Placeholder</div>
      </div>
      <div className="card-metrics">
        <p className="impressions-count">{props.impressions.count}</p>
        <p className="impressions-label">impressions</p>
        <p className="conversions-count">{props.conversions.count}</p>
        <p className="conversions-label">conversions</p>
        <p className="revenue-count">
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(props.revenue)}
          {/* {props.revenue} */}
        </p>
      </div>
    </div>
  </StyledGridCardWrapper>
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
