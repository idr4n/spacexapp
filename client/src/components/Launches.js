import React, { useContext } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import LaunchItem from './LaunchesItem';
import MissionKey from './MissionKey';
import { FilterContext } from '../contexts/FilterContext';

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
  const { successFilter, failFilter } = useContext(FilterContext);
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <h4>Loading...</h4>;
  if (error) console.log(error);

  let filteredLaunches = data.launches;
  let totalLaunches = filteredLaunches.length;

  if ((successFilter && failFilter) || (!successFilter && !failFilter)) {
    filteredLaunches = data.launches;
    totalLaunches = filteredLaunches.length;
  }
  if (successFilter && !failFilter) {
    filteredLaunches = data.launches.filter((launch) => launch.success);
    totalLaunches = filteredLaunches.length;
  }
  if (failFilter && !successFilter) {
    filteredLaunches = data.launches.filter((launch) => !launch.success);
    totalLaunches = filteredLaunches.length;
  }

  const displayLaunches = () => {
    return filteredLaunches.map((launch) => (
      <LaunchItem key={launch.flight_number} launch={launch} />
    ));
  };

  return (
    <React.Fragment>
      <h1 className="display-4 my-3">Launches (total = {totalLaunches})</h1>
      <MissionKey />
      {displayLaunches()}
    </React.Fragment>
  );
};

export default Launches;
