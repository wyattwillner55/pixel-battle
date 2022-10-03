import React from 'react';
import GitHubLogo from '../../images/GitHub-Mark.png'
import PortfolioIcon from '../../images/portfolio.png'

export default function AboutMe() {
  return (
    <div>
      <h1 className='text-5xl mb-12 text-blue-400 text-center'>About Us</h1>
      <div className="rounded-lg border-4 bg-gradient-to-b from-gray-200 to-gray-500 p-2 mb-8">
        <div className='bg-gradient-to-b from-blue-600 to-indigo-900 p-8 grid grid-cols-4 gap-12'>
          <div className='col-span-1'>
            <img className="w-full" src={"https://i.imgur.com/QyvWcCv.png"} alt={"Voravich's sprite"}></img>
          </div>
          <div className='col-span-3'>
            <p className='text-4xl text-teal-200 leading-loose'>Voravich Silapachairueng:</p>
            <p className='text-teal-100'>
              <a href='https://github.com/voravichs' target="_blank" rel="noreferrer">
                <img className='w-24 h-24 contrast-100 hover:contrast-150' src={GitHubLogo} alt="github logo" />
              </a>
            </p>
            <p className='text-teal-100'>
              <a href='https://voravichs.github.io/voravich-react-portfolio/' target="_blank" rel="noreferrer">
                <img className='w-24 h-24 contrast-100 hover:contrast-150' src={PortfolioIcon} alt="portfolio icon" />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-lg border-4 bg-gradient-to-b from-gray-200 to-gray-500 p-2 mb-8">
        <div className='bg-gradient-to-b from-blue-600 to-indigo-900 p-8 grid grid-cols-4 gap-12'>
          <div className='col-span-1'>
            <img className="w-full" src={"https://i.imgur.com/VdO7vOc.png"} alt={"Wyatt's sprite"}></img>
          </div>
          <div className='col-span-3'>
            <p className='text-4xl text-teal-200 leading-loose'>Wyatt Willner:</p>
            <p className='text-teal-100'>
              <a href='https://github.com/wyattwillner55' target="_blank" rel="noreferrer">
                <img className='w-24 h-24 contrast-100 hover:contrast-150' src={GitHubLogo} alt="github logo" />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-lg border-4 bg-gradient-to-b from-gray-200 to-gray-500 p-2 mb-8">
        <div className='bg-gradient-to-b from-blue-600 to-indigo-900 p-8 grid grid-cols-4 gap-12'>
          <div className='col-span-1'>
            <img className="w-full" src={"https://i.imgur.com/d0GkpSd.png"} alt={"Ida's sprite"}></img>
          </div>
          <div>
            <p className='text-4xl text-teal-200 leading-loose'>Ida Kukimiya:</p>
            <p className='text-teal-100'>
              <a href='https://github.com/idakukimiya' target="_blank" rel="noreferrer">
                <img className='w-24 h-24 contrast-100 hover:contrast-150' src={GitHubLogo} alt="github logo" />
              </a>
            </p>
            <p className='text-teal-100'>
              <a href='https://idakukimiya.github.io/Ida_REACTportfolio/ ' target="_blank" rel="noreferrer">
              <img className='w-24 h-24 contrast-100 hover:contrast-150' src={PortfolioIcon} alt="portfolio icon" />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-lg border-4 bg-gradient-to-b from-gray-200 to-gray-500 p-2 mb-8">
        <div className='bg-gradient-to-b from-blue-600 to-indigo-900 p-8 grid grid-cols-4 gap-12'>
          <div className='col-span-1'>
            <img className="w-full" src={"https://i.imgur.com/BahredX.png"} alt={"Eric's sprite"}></img>
          </div>
          <div className='col-span-3'>
            <p className='text-4xl text-teal-200 leading-loose'>Eric Courter:</p>
            <p className='text-teal-100'>
              <a href='https://github.com/Amob7' target="_blank" rel="noreferrer">
                <img className='w-24 h-24 contrast-100 hover:contrast-150' src={GitHubLogo} alt="github logo" />
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border-4 bg-gradient-to-b from-gray-200 to-gray-500 p-2 w-1/2 mx-auto">
        <div className='bg-gradient-to-b from-blue-600 to-indigo-900 p-8'>
          <p className='text-4xl text-teal-200 ml-6 leading-loose'>Credits</p>
          <li className='text-xl text-teal-100'>
            <a className='text-teal-300' href='https://opengameart.org/content/roguelike-character-pack' target="_blank" rel="noreferrer">
              Kenney.nl, hosted on OpenGameArt.org
            </a>, for pixel sprite assets
          </li>
          <li className='text-teal-100'>
            <a className='text-xl text-teal-300' href='https://opengameart.org/content/16x16-16x24-32x32-rpg-enemies-updated' target="_blank" rel="noreferrer">
              Stephen "Redshrike" Challener, hosted on OpenGameArt.org
            </a>, for the pixel enemy assets
          </li>
          <li className='text-teal-100'>
            <a className='text-xl text-teal-300' href='https://opengameart.org/content/mountain-at-dusk-background' target="_blank" rel="noreferrer">
              ansimuz, hosted on OpenGameArt.org
            </a>, for the mountain background asset
          </li>
          <li className='text-teal-100'>
            <a className='text-xl text-teal-300' href='https://opengameart.org/content/paper-popup-backgrounds' target="_blank" rel="noreferrer">
              ztn and darkwood67, hosted on OpenGameArt.org
            </a>, for paper background asset
          </li>
          <li className='text-teal-100'>
            <a className='text-xl text-teal-300' href='https://opengameart.org/content/backgrounds-3' target="_blank" rel="noreferrer">
              Nidhoggn, hosted on OpenGameArt.org
            </a>, for battle backgrounds
          </li>
          <li className='text-teal-100'>
            <a className='text-xl text-teal-300' href="https://www.vecteezy.com/free-vector/portfolio-icon" target="_blank" rel="noreferrer">
              Portfolio Icon Vectors by Vecteezy
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}
