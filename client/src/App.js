import React, { useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import Navigation from './components/Navigation';
import Header from './components/Header';
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs';
import LogIn from './components/pages/LogIn';
import SignUp from './components/pages/SignUp';
import CharCust from './components/pages/CharCust';
import Battle from './components/pages/Battle';
import Profile from './components/pages/Profile';
import BountyBoard from './components/pages/BountyBoard';

import './font/Diaryofan8-bitmage.woff'
import './css/tailwind.css'

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [newCharacter, setNewCharacter] = useState();
  const [newEnemy, setNewEnemy] = useState();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  const handleBattle = (character, enemy) => {
    setNewCharacter(character);
    setNewEnemy(enemy);
  }

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <div className='bg-gray-800 pb-1'>
            <div className='flex flex-col lg:flex-row p-12 bg-gradient-to-b from-gray-800 to-gray-900 drop-shadow-xl'>
              <Header />
              <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
            <div className='m-16'>
              <Routes>
                <Route
                  path="/"
                  element={<Home />}
                />
                <Route
                  path="/login"
                  element={<LogIn />}
                />
                <Route
                  path="/signup"
                  element={<SignUp />}
                />
                <Route
                  path="/aboutus"
                  element={<AboutUs />}
                />
                <Route
                  path="/createcharacter"
                  element={<CharCust/>}
                />
                <Route
                  path="/battle"
                  element={<Battle character={newCharacter} enemy={newEnemy} />}
                />
                <Route
                  path="/profile/:username"
                  element={<Profile />}
                />
                <Route
                  path="/bounties/:username"
                  element={<BountyBoard handleBattle={handleBattle}/>}
                />
              </Routes>
            </div>
          </div>
        </div>
      </Router>

    </ApolloProvider>
  )
}
