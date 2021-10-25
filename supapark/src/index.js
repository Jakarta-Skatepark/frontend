import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { ApolloProvider } from '@apollo/client';
import client from './GraphQL/Client';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.querySelector('#root')
);
