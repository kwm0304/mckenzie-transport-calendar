import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Header from './components/Header';
import EventForm from './components/EventForm';
import Calendar from './components/Calendar';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route
          path='/'
          element={<Calendar />}
          />
          <Route
          path='/login'
          element={<Login />}
          />
          <Route
          path='/event-form'
          element={<EventForm />}
          />
          <Route
          path='/finances'
          element={<FinancialReport/>}
          />
        </Routes>
      </Router>
    </ApolloProvider>
  )
};

export default App;
