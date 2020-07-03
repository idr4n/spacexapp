const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
} = require('graphql');

// Launch Type
const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    id: { type: GraphQLString },
    flight_number: { type: GraphQLInt },
    name: { type: GraphQLString },
    date_local: { type: GraphQLString },
    success: { type: GraphQLBoolean },
    rocket: {
      type: RocketType,
      resolve(parent, _args) {
        return axios
          .get(`https://api.spacexdata.com/v4/rockets/${parent.rocket}`)
          .then((res) => res.data);
      },
    },
  }),
});

// RocketType
const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    launches: {
      type: GraphQLList(LaunchType),
      resolve(_parent, _args) {
        return axios
          .get('https://api.spacexdata.com/v4/launches')
          .then((res) => res.data);
      },
    },
    rockets: {
      type: GraphQLList(RocketType),
      resolve(_parent, _args) {
        return axios
          .get('https://api.spacexdata.com/v4/rockets')
          .then((res) => res.data);
      },
    },
    launch: {
      type: LaunchType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(_parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v4/launches/${args.id}`)
          .then((res) => res.data);
      },
    },
    rocket: {
      type: RocketType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(_parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v4/rockets/${args.id}`)
          .then((res) => res.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});

