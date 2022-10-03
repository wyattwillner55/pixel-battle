import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

export default function Home() {
  return (
    <div>
      <p className='text-4xl mb-16 text-blue-400 text-center'>
        A foul wind blows through the ancient lands of <span className='text-blue-200'>PENNSYLVANIA...</span>
        <br></br>
        O' brave <span className='text-blue-200'>MERN STACK PROGRAMMER</span>, have ye the gall to best this perilous challenge?
      </p>
      <img className="lg:w-2/3 xl:w-1/2 mx-auto mb-16" src={"https://i.imgur.com/CjQGTCq.png"} alt={"mountains"}></img>
      <div className='xl:w-2/3 mx-auto rounded-lg border-2 bg-gradient-to-b from-gray-200 to-gray-500 p-2'>
        <div className='bg-gradient-to-b from-blue-600 to-indigo-900 p-8'>
          {Auth.loggedIn() ? (
            <>
              <p className='text-4xl md:text-5xl mb-12 text-teal-400 text-center py-3'> Welcome back to the Guild, {Auth.getProfile().data.username}!</p>
              <Link
                to="/createcharacter"
                className='block lg:w-1/2 text-teal-200 text-2xl bg-blue-00 hover:bg-blue-800 hover:text-teal-200 transition-all ring-2 rounded-lg ring-teal-500 p-4 text-center mx-auto' >
                Register a New Adventurer
              </Link>
              <Link
                to={`/bounties/${Auth.getProfile().data.username}`}
                className='block lg:w-1/2 mt-8 text-teal-200 text-2xl bg-blue-00 hover:bg-blue-800 hover:text-teal-200 transition-all ring-2 rounded-lg ring-teal-500 p-4 text-center mx-auto' >
                Accept a Bounty from the Board
              </Link>
            </>

          ) : (
            <>
              <Link
                to="/signup"
                className='block lg:w-1/2 text-teal-200 text-2xl bg-blue-00 hover:bg-blue-800 hover:text-teal-200 transition-all ring-2 rounded-lg ring-teal-500 p-4 text-center mx-auto' >
                I am new around here.
              </Link>
              <Link
                to="/login"
                className='block lg:w-1/2 mt-8 text-teal-200 text-2xl bg-blue-00 hover:bg-blue-800 hover:text-teal-200 transition-all ring-2 rounded-lg ring-teal-500 p-4 text-center mx-auto' >
                I've already signed up with the Guild.
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
