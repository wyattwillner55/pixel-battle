import React from 'react';
import GitHubLogo from '../images/GitHub-Mark.png'
import LinkedInLogo from '../images/LI-In-Bug.png'
import TwitterLogo from "../images/2021 Twitter logo - blue.png"

export default function Footer() {
  return (
    <div className='flex justify-evenly mt-16 bg-emerald-400 py-12 drop-shadow-2xl'>
      <a href='https://github.com/voravichs'>
        <img className='w-24 h-24 contrast-50 hover:contrast-100' src={GitHubLogo} alt="github logo" />
      </a>
      <a href='https://www.linkedin.com/in/voravich-silapachairueng/'>
        <img className='w-24 h-20 grayscale hover:grayscale-0' src={LinkedInLogo} alt="linkedin logo" />
      </a>
      <a href='https://twitter.com/bainrowz'>
        <img className='w-24 h-20 grayscale hover:grayscale-0' src={TwitterLogo} alt="linkedin logo" />
      </a>

    </div>

  );
}
