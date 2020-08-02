import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';

const LaunchItem = ({
  launch: { flight_number, name, date_local, success },
}) => {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission:{' '}
            <span
              className={classNames({
                'text-success': success,
                'text-danger': !success,
              })}
            >
              {name}
            </span>
          </h4>
          <p>
            Date: <Moment format="YYYY-MM-DD HH:mm">{date_local}</Moment>
          </p>
        </div>
        <div className="col-md-3">
          <button className="btn btn-secondary">Launch Details</button>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
