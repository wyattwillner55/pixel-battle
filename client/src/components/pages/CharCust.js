import { useState } from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

import { useMutation } from '@apollo/client';
import { SAVE_CHARACTER } from '../../utils/mutations';

const special = [
  {
    link: "https://i.imgur.com/IKkNfxJ.png",
    name: "orc"
  },
  {
    link: "https://i.imgur.com/O3mZbud.png",
    name: "legend of zelda link"
  },
  {
    link: "https://i.imgur.com/zUjGl7b.png",
    name: "male archer"
  },
  {
    link: "https://i.imgur.com/d0GkpSd.png",
    name: "female archer"
  },
  {
    link: "https://i.imgur.com/Rt5QPp9.png",
    name: "knight"
  },
  {
    link: "https://i.imgur.com/a5j7Zt1.png",
    name: "king"
  },
  {
    link: "https://i.imgur.com/yvaVbNn.png",
    name: "santa"
  },
  {
    link: "https://i.imgur.com/BUuDLsF.png",
    name: "minecraft steve"
  },
  {
    link: "https://i.imgur.com/DcCfdrm.png",
    name: "clown"
  },
  {
    link: "https://i.imgur.com/cIOapB8.png",
    name: "Ben"
  }
]

const mages = [
  {
    link: "https://i.imgur.com/cg33q2p.png",
    name: "mage male 1"
  },
  {
    link: "https://i.imgur.com/9DaKajc.png",
    name: "mage male 2"
  },
  {
    link: "https://i.imgur.com/6BaNEVx.png",
    name: "mage male 3"
  },
  {
    link: "https://i.imgur.com/ks5ip37.png",
    name: "mage female 1"
  },
  {
    link: "https://i.imgur.com/9D4tyho.png",
    name: "mage female 2"
  },
  {
    link: "https://i.imgur.com/Wzf7usJ.png",
    name: "mage female 3"
  },
  {
    link: "https://i.imgur.com/VdO7vOc.png",
    name: "mage male 4"
  },
  {
    link: "https://i.imgur.com/8Kq17ca.png",
    name: "mage male 5"
  },
  {
    link: "https://i.imgur.com/cbOherN.png",
    name: "mage male 6"
  },
  {
    link: "https://i.imgur.com/DMsJKMD.png",
    name: "mage female 4"
  },
  {
    link: "https://i.imgur.com/5SzeQfH.png",
    name: "mage female 5"
  },
  {
    link: "https://i.imgur.com/fupiH4E.png",
    name: "mage female 6"
  },
  {
    link: "https://i.imgur.com/aGyRjJw.png",
    name: "mage male 7"
  },
  {
    link: "https://i.imgur.com/cZ1ZYnS.png",
    name: "mage male 8"
  },
  {
    link: "https://i.imgur.com/1hRAKES.png",
    name: "mage male 9"
  },
  {
    link: "https://i.imgur.com/uYdtslc.png",
    name: "mage female 7"
  },
  {
    link: "https://i.imgur.com/eO8dqbl.png",
    name: "mage female 8"
  },
  {
    link: "https://i.imgur.com/vOGzpjL.png",
    name: "mage female 9"
  },
]

const rogues = [
  {
    link: "https://i.imgur.com/aIAahnA.png",
    name: "rogue male 1"
  },
  {
    link: "https://i.imgur.com/POwbKGQ.png",
    name: "rogue male 2"
  },
  {
    link: "https://i.imgur.com/8qSkhgR.png",
    name: "rogue male 3"
  },
  {
    link: "https://i.imgur.com/C2nU8px.png",
    name: "rogue female 1"
  },
  {
    link: "https://i.imgur.com/bhVfcDE.png",
    name: "rogue female 2"
  },
  {
    link: "https://i.imgur.com/dCUQspe.png",
    name: "rogue female 3"
  },
  {
    link: "https://i.imgur.com/NGb5z4W.png",
    name: "rogue male 4"
  },
  {
    link: "https://i.imgur.com/BahredX.png",
    name: "rogue male 5"
  },
  {
    link: "https://i.imgur.com/I2yBqr1.png",
    name: "rogue male 6"
  },
  {
    link: "https://i.imgur.com/XVdzYim.png",
    name: "rogue female 4"
  },
  {
    link: "https://i.imgur.com/XJztwUe.png",
    name: "rogue female 5"
  },
  {
    link: "https://i.imgur.com/4XYkPj3.png",
    name: "rogue female 6"
  },
  {
    link: "https://i.imgur.com/aRM0uh1.png",
    name: "rogue male 7"
  },
  {
    link: "https://i.imgur.com/GOFrFju.png",
    name: "rogue male 8"
  },
  {
    link: "https://i.imgur.com/qlVE0PA.png",
    name: "rogue male 9"
  },
  {
    link: "https://i.imgur.com/zgfMAu5.png",
    name: "rogue female 7"
  },
  {
    link: "https://i.imgur.com/Co2OFKX.png",
    name: "rogue female 8"
  },
  {
    link: "https://i.imgur.com/P0dKCP5.png",
    name: "rogue female 9"
  },
]

const warriors = [
  {
    link: "https://i.imgur.com/vXI9qWq.png",
    name: "warrior male 1"
  },
  {
    link: "https://i.imgur.com/chf5Hhb.png",
    name: "warrior male 2"
  },
  {
    link: "https://i.imgur.com/8DHRIkk.png",
    name: "warrior male 3"
  },
  {
    link: "https://i.imgur.com/a3Bx4Gx.png",
    name: "warrior female 1"
  },
  {
    link: "https://i.imgur.com/h7McTWB.png",
    name: "warrior female 2"
  },
  {
    link: "https://i.imgur.com/KFTCQfT.png",
    name: "warrior female 3"
  },
  {
    link: "https://i.imgur.com/QyvWcCv.png",
    name: "warrior male 4"
  },
  {
    link: "https://i.imgur.com/rZ4LfIP.png",
    name: "warrior male 5"
  },
  {
    link: "https://i.imgur.com/MqdpZBt.png",
    name: "warrior male 6"
  },
  {
    link: "https://i.imgur.com/YmSQ5MK.png",
    name: "warrior female 4"
  },
  {
    link: "https://i.imgur.com/b0t2WtW.png",
    name: "warrior female 5"
  },
  {
    link: "https://i.imgur.com/nJNl5Rh.png",
    name: "warrior female 6"
  },
  {
    link: "https://i.imgur.com/kUecslU.png",
    name: "warrior male 7"
  },
  {
    link: "https://i.imgur.com/uugHOgb.png",
    name: "warrior male 8"
  },
  {
    link: "https://i.imgur.com/sw9CJbm.png",
    name: "warrior male 9"
  },
  {
    link: "https://i.imgur.com/87q2Ukw.png",
    name: "warrior female 7"
  },
  {
    link: "https://i.imgur.com/GdRNQY8.png",
    name: "warrior female 8"
  },
  {
    link: "https://i.imgur.com/5gL3CQC.png",
    name: "warrior female 9"
  },
]

let charSprites = warriors;

const CharCust = () => {
  const [formState, setFormState] = useState({ name: '' });
  const [currentSprite, setCurrentSprite] = useState(0);
  const [chosenSprite, setChosenSprite] = useState(charSprites[0]);
  const [saved, setSaved] = useState(false);
  const [preset, setPreset] = useState({
    name: "Weak",
    level: 1,
    health: 10,
    attack: 4,
    defense: 1
  });

  const [saveChar] = useMutation(SAVE_CHARACTER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleCreate = async (event) => {
    event.preventDefault();
    try {
      await saveChar({
        variables: {
          "username": `${Auth.getProfile().data.username}`,
          "newCharacter": {
            "name": formState.name,
            "link": chosenSprite.link,
            "level": preset.level,
            "health": preset.health,
            "attack": preset.attack,
            "defense": preset.defense
          }
        }
      });
      setSaved(true);
    } catch (e) {
      console.error(e);
    }
  }

  const handleNext = (e) => {
    e.preventDefault();
    if (currentSprite === charSprites.length - 1) {
      setChosenSprite(charSprites[0]);
      setCurrentSprite(0);
    } else {
      setChosenSprite(charSprites[currentSprite + 1]);
      setCurrentSprite(currentSprite + 1);

    }
  }

  const handlePrev = (e) => {
    e.preventDefault();
    if (currentSprite === 0) {
      setChosenSprite(charSprites[charSprites.length - 1]);
      setCurrentSprite((charSprites.length - 1));
    } else {
      setChosenSprite(charSprites[currentSprite - 1]);
      setCurrentSprite(currentSprite - 1);
    }
  }

  const handleSelect = (e) => {
    switch (e.target.value) {
      case "warrior":
        charSprites = warriors;
        setChosenSprite(charSprites[0]);
        setCurrentSprite(0);
        break;
      case "rogue":
        charSprites = rogues;
        setChosenSprite(charSprites[0]);
        setCurrentSprite(0);
        break;
      case "mage":
        charSprites = mages;
        setChosenSprite(charSprites[0]);
        setCurrentSprite(0);
        break;
      case "special":
        charSprites = special;
        setChosenSprite(charSprites[0]);
        setCurrentSprite(0);
        break;

      default:
        break;
    }
  }

  const handlePreset = (e) => {
    switch (e.target.value) {
      case "weak":
        setPreset({
          name:"Weak",
          level: 1,
          health: 10,
          attack: 4,
          defense: 1
        })
        break;
      case "strong":
        setPreset({
          name: "Strong",
          level: 10,
          health: 40,
          attack: 20,
          defense: 3
        })
        break;
      case "robust":
        setPreset({
          name: "Robust",
          level: 10,
          health: 120,
          attack: 7,
          defense: 5
        })
        break;
      case "sturdy":
        setPreset({
          name: "Sturdy",
          level: 10,
          health: 60,
          attack: 6,
          defense: 15
        })
        break;
      case "hacker":
        setPreset({
          name: "Hacker",
          level: 999,
          health: 1000,
          attack: 200,
          defense: 90
        })
        break;
      default:
        break;
    }
  }

  return (
    <div className="rounded-lg border-4 bg-gradient-to-b from-gray-200 to-gray-500 p-2">
      <div className='bg-gradient-to-b from-blue-600 to-indigo-900 p-8'>
        <h1 className='text-4xl md:text-5xl mb-12 text-teal-400 text-center py-3'>Character Creation</h1>
        <div className='grid lg:grid-cols-2'>
          <div>
            <p className='text-4xl text-teal-200 text-center'> Select A Portrait</p>
            <img className="w-2/3 mx-auto" src={chosenSprite.link} alt={chosenSprite.name}></img>
            <div className='flex mb-8'>
              <button className='block w-5/12 text-teal-200 text-2xl bg-blue-00 hover:bg-gray-700 transition-all ring-2 rounded-lg ring-teal-500 p-auto py-4 mx-auto'
                type="button"
                onClick={handlePrev}>
                Prev
              </button>
              <button className='block w-5/12 text-teal-200 text-2xl bg-blue-00 hover:bg-gray-700 transition-all ring-2 rounded-lg ring-teal-500 p-auto py-4 mx-auto'
                type="button"
                onClick={handleNext}>
                Next
              </button>
            </div>
            <p className='text-3xl mb-4 text-teal-200 text-center'>Portrait Style</p>
            <div className="w-1/2 lg:max-w-sm mx-auto pb-3">
              <select className="w-full p-2.5 text-teal-200 bg-gray-700 hover:bg-gray-600 border border-teal-200 rounded-md shadow-sm ring-teal-500 appearance-none focus:border-teal-600"
                onChange={handleSelect}>
                <option value="warrior">Warrior</option>
                <option value="rogue">Rogue</option>
                <option value="mage">Mage</option>
                <option value="special">Special</option>
              </select>
            </div>
          </div>
          <form className='my-auto h-full md:relative' onSubmit={handleCreate}>
            <div className='mt-24 md:mt-0'>
              <p className='text-4xl mb-8 text-teal-200 text-center'> Name your Character</p>
              <input
                className='text-center p-4 text-xl mb-8 w-full bg-gray-700 text-teal-200 placeholder:text-teal-200 border border-teal-200'
                placeholder="Enter Name"
                name="name"
                value={formState.name}
                onChange={handleChange}
              />
              <p className='text-3xl mb-4 text-teal-200 text-center'>Select a Preset</p>
              <div className="w-1/2 lg:max-w-sm mx-auto pb-3">
                <select className="mb-8 w-full p-2.5 text-teal-200 bg-gray-700 hover:bg-gray-600 border border-teal-200 rounded-md shadow-sm ring-teal-500 appearance-none focus:border-teal-600"
                  onChange={handlePreset}>
                  <option value="weak">Weak</option>
                  <option value="strong">Strong</option>
                  <option value="robust">Robust</option>
                  <option value="strong">Sturdy</option>
                  <option value="hacker">Hacker</option>
                </select>
              </div>
              <p className='text-2xl mb-4 text-white text-center'> Level: {preset.level}</p>
              <p className='text-2xl mb-4 text-white text-center'> HP: {preset.health}</p>
              <p className='text-2xl mb-4 text-white text-center'> Attack: {preset.attack}</p>
              <p className='text-2xl mb-4 text-white text-center'> Defense: {preset.defense}</p>
              <button
                className='mt-8 text-center block w-1/2 text-teal-200 text-2xl hover:bg-gray-700 hover:text-teal-200 transition-all ring-2 rounded-lg ring-teal-500 p-4 mx-auto py-3 '
                type="submit">
                Create
              </button>
            </div>
            {saved && (
              <p className="text-xl mt-4 text-white text-center">
                Character Saved!
                <br></br>It may take a few seconds to register them.
                You may now return to the main menu.
              </p>
            )}
            <Link
              className='mt-24 block w-1/2 text-teal-200 text-2xl hover:bg-gray-700 hover:text-teal-200 transition-all ring-2 rounded-lg ring-teal-500 p-4 mx-auto py-3'
              to="/">
              Return to Main Menu
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CharCust;