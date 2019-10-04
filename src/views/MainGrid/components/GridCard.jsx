import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { startCase } from 'lodash';
import { Line } from 'react-chartjs-2';

import StyledGridCardWrapper from '../styledComponents/StyledGridCardWrapper';

const GridCard = ({
  avatar,
  name,
  occupation,
  revenue,
  impressions,
  conversions
}) => {
  const [imageError, setImageError] = useState(false);

  // generates a random background color for the blank avatar background
  const colors = ['red', 'yellow', 'blue', 'orange', 'green', 'purple', 'pink'];

  // Graphic configs
  const graphOptions = {
    legend: {
      display: false
    },
    scales: { xAxes: [{ display: false }], yAxes: [{ display: false }] },
    layout: {
      padding: 5
    }
  };

  let sortedDates = Object.keys(conversions.graphData).sort();
  const graphData = {
    labels: sortedDates,
    datasets: [
      {
        fill: false,
        backgroundColor: '#000',
        borderColor: '#000',
        pointRadius: 1,
        pointHitRadius: 10,
        data: sortedDates.map(day => conversions.graphData[day].toFixed(2))
      }
    ]
  };

  return (
    <StyledGridCardWrapper>
      <div className="card-header">
        <div className="card-avatar">
          {/* onError contains error handling for avatar images that are returning 403 responses */}
          {avatar && !imageError ? (
            <img
              src={avatar}
              alt="User avatar"
              onError={() => setImageError(true)}
            />
          ) : (
            <span
              style={{
                backgroundColor:
                  colors[Math.floor(Math.random() * colors.length)]
              }}
            >
              {name[0]}
            </span>
          )}
        </div>
        <div className="card-name">
          <h4>{name}</h4>
          <p>{startCase(occupation)}</p>
        </div>
      </div>
      <div className="card-body">
        <div className="card-graph">
          <Line data={graphData} options={graphOptions} />
          <span className="graph-label">{`Daily Revenue: ${sortedDates[0]} - ${
            sortedDates[sortedDates.length - 1]
          }`}</span>
        </div>
        <div className="card-metrics">
          <p className="impressions-count">{impressions}</p>
          <p className="impressions-label">impressions</p>
          <p className="conversions-count">{conversions.count}</p>
          <p className="conversions-label">conversions</p>
          <p className="revenue-count">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD'
            }).format(revenue)}
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
  impressions: PropTypes.number,
  conversions: PropTypes.object
};

export default GridCard;
