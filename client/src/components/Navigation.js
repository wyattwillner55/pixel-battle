import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

function Navigation({ currentPage, handlePageChange }) {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <ul className="text-teal-500 flex flex-col text-center sm:flex-row justify-between mt-4 lg:mt-0 xl:mt-0 xl:mr-4 text-3xl sm:text-4xl">
      <li className="mt-4 lg:mr-8">
        <Link
          to="/"
          onClick={() => handlePageChange('Home')}

          className={currentPage === 'Home'
            ? 'text-blue-500 font-black drop-shadow-xl hover:text-blue-200'
            : 'text-blue-400 hover:text-blue-100'}
        >
          Home
        </Link>
      </li>
      <li className="mt-4 lg:mr-8">
        <Link
          to="/aboutus"
          onClick={() => handlePageChange('AboutUs')}

          className={currentPage === 'AboutUs'
            ? 'text-blue-500 font-black drop-shadow-xl hover:text-blue-200'
            : 'text-blue-400 hover:text-blue-100'}
        >
          About Us
        </Link>
      </li>
      {Auth.loggedIn() ? (
        <>
          <li className="mt-4 lg:mr-8">
            <Link
              to={`/profile/${Auth.getProfile().data.username}`}
              onClick={() => handlePageChange('Profile')}

              className={currentPage === 'Profile'
                ? 'text-blue-500 font-black drop-shadow-xl hover:text-blue-200'
                : 'text-blue-400 hover:text-blue-100'}
            >
              My Profile
            </Link>
          </li>
          <li className="mt-4 lg:mr-8">
            <button className="text-blue-400 hover:text-blue-100" onClick={logout}>
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li className="mt-4 lg:mr-8">
            <Link
              to="/login"
              onClick={() => handlePageChange('LogIn')}

              className={currentPage === 'LogIn'
                ? 'text-blue-500 font-black drop-shadow-xl hover:text-blue-200'
                : 'text-blue-400 hover:text-blue-100'}
            >
              Log In
            </Link>
          </li>
          <li className="mt-4 lg:mr-8">
            <Link
              to="/signup"
              onClick={() => handlePageChange('SignUp')}

              className={currentPage === 'SignUp'
                ? 'text-blue-500 font-black drop-shadow-xl hover:text-blue-200'
                : 'text-blue-400 hover:text-blue-100'}
            >
              Sign Up
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}

export default Navigation;
