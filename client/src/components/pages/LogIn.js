import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const LogIn = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className="rounded-lg border-4 bg-gradient-to-b from-gray-200 to-gray-500 p-2 lg:w-3/4 mx-auto">
      <div className="bg-gradient-to-b from-blue-600 to-indigo-900 p-8">
        <h1 className="text-4xl md:text-5xl mb-12 text-teal-400 text-center py-3">Welcome back! <br></br>Sign in to the Guild's Logbook:</h1>
        <form className="grid grid-rows-3" onSubmit={handleFormSubmit}>
          <input
            className="md:w-3/4 xl:w-2/3 mx-auto p-4 text-xl mb-8 w-full bg-gray-700 text-teal-200 placeholder:text-teal-200 border border-teal-200"
            placeholder="Your email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
          />
          <input
            className="md:w-3/4 xl:w-2/3 mx-auto p-4 text-xl mb-8 w-full bg-gray-700 text-teal-200 placeholder:text-teal-200 border border-teal-200"
            placeholder="******"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
          />
          <button
            className="block w-1/2 text-teal-200 text-3xl hover:bg-gray-700 hover:text-teal-200 transition-all ring-2 rounded-lg ring-teal-500 p-4 mx-auto py-3"
            style={{ cursor: 'pointer' }}
            type="submit"
          >
            Log In
          </button>
        </form>
        {error && (
          <div className="text-2xl mt-8 text-slate-50 text-center">
            {error.message}
          </div>
        )}
      </div>
    </main>
  );
};

export default LogIn;
