import React from 'react';

const LaunchItem = ({
  launch: { flight_number, name, date_local, success },
}) => {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>Mission: {name}</h4>
          <p>Date: {date_local}</p>
        </div>
        <div className="col-md-3">
          <button className="btn btn-secondary">Launch Details</button>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;

