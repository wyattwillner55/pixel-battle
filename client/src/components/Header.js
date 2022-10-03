import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png'


export default function Header() {
  return (
    <Link
      to="/">
      <img className='w-full lg:w-11/12 xl:w-3/4' src={Logo} alt='pixel battle logo'></img>
    </Link>
  );
}
