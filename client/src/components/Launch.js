import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Moment from 'react-moment';

const LAUNCH_QUERY = gql`
  query LaunchQuery($id: String!) {
    launch(id: $id) {
      flight_number
      name
      success
      date_local
      rocket {
        id
        name
        type
      }
    }
  }
`;

const Launch = (props) => {
  const { id } = props.match.params;

  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { id },
  });

  const displayLaunch = () => {
    if (loading) return <h4>Loading...</h4>;
    if (error) console.log(error);

    const { name, flight_number, success, date_local, rocket } = data.launch;

    return (
      <div>
        <h1 className="display-4 my-3">
          <span className="text-light">Mission:</span> {name}
        </h1>
        <h4 className="mb-3">Launch Details</h4>
        <ul className="list-group">
          <li className="list-group-item">Flight Number: {flight_number}</li>
          <li className="list-group-item">
            Launch Year: <Moment format="YYYY">{date_local}</Moment>
          </li>
          <li className="list-group-item">
            Launch Successful:{' '}
            <span
              className={classNames({
                'text-success': success,
                'text-danger': !success,
              })}
            >
              {success ? 'Yes' : 'No'}
            </span>
          </li>
        </ul>
        <h4 className="my-3">Rocket Details</h4>
        <ul className="list-group">
          <li className="list-group-item">Rocket ID: {rocket.id}</li>
          <li className="list-group-item">Rocket Name: {rocket.name}</li>
          <li className="list-group-item">Rocket Type: {rocket.type}</li>
        </ul>
        <hr />
        <Link to="/" className="btn btn-secondary">
          Back
        </Link>
      </div>
    );
  };

  return <React.Fragment>{displayLaunch()}</React.Fragment>;
};

export default Launch;
