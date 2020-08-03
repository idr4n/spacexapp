import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import logo from './logo.svg';

import Launches from './components/Launches';
import Launch from './components/Launch';
import FilterContextProvider from './contexts/FilterContext';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <FilterContextProvider>
        <Router>
          <div className="container">
            <img
              src={logo}
              alt="SpaceX"
              style={{ width: 300, display: 'block', margin: 'auto' }}
            />
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:id" component={Launch} />
          </div>
        </Router>
      </FilterContextProvider>
    </ApolloProvider>
  );
}

export default App;
