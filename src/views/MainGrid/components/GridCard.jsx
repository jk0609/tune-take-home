import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { startCase } from 'lodash';
import { Line } from 'react-chartjs-2';

import StyledGridCardWrapper from '../styledComponents/StyledGridCardWrapper';

const GridCard = props => {
  const [imageError, setImageError] = useState(false);

  // generates a random background color for the blank avatar background
  const colors = ['red', 'yellow', 'blue', 'orange', 'green', 'purple', 'pink'];
  const color = colors[Math.floor(Math.random() * colors.length)];

  // Graphic configs
  const graphOptions = {
    legend: {
      display: false
    },
    scales: { xAxes: [{ display: false }], yAxes: [{ display: false }] }
  };

  const graphData = {
    // TODO: last two weeks of days
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Conversions',
        fill: false,
        backgroundColor: '#000',
        borderColor: '#000',
        borderCapStyle: 'butt',
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        // TODO: total revenue for each day
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ],
    options: {
      legend: {
        display: false
      }
    }
  };

  return (
    <StyledGridCardWrapper avatarColor={color}>
      <div className="card-header">
        <div className="card-avatar">
          {/* onError contains error handling for avatar images that are returning 403 responses */}
          {props.avatar && !imageError ? (
            <img
              src={props.avatar}
              alt="User avatar"
              onError={() => setImageError(true)}
            />
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
          <Line data={graphData} options={graphOptions} />
          {/* TODO: Date range */}
          <span className="graph-label">Label</span>
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
          </p>
        </div>
      </div>
    </StyledGridCardWrapper>
  );
};

GridCard.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  occupation: PropTypes.string,
  revenue: PropTypes.number,
  impressions: PropTypes.object,
  conversions: PropTypes.object
};

export default GridCard;
