import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import LaunchItem from './LaunchesItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      id
      flight_number
      name
      date_local
      success
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  const displayLaunches = () => {
    if (loading) return <h4>Loading...</h4>;
    if (error) console.log(error);

    return data.launches.map((launch) => (
      <LaunchItem key={launch.flight_number} launch={launch} />
    ));
  };

  return (
    <React.Fragment>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />
      {displayLaunches()}
    </React.Fragment>
  );
};

export default Launches;
