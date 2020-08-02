import React from 'react';

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
const Launch = () => {
  return (
    <div>
      <h1>Launch</h1>
    </div>
  );
};

export default Launch;
