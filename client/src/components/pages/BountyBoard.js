import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Player from '../../utils/Player'

import { GET_SINGLE_USER } from '../../utils/queries';

const enemies = [
    {
        enemyLevel: 1,
        enemyLink: "https://i.imgur.com/tJ3kdEA.png",
        enemyName: "Slime",
        enemyHP: "10",
        enemyAttack: "3",
        enemyDefense: "0"
    },
    {
        enemyLevel: 2,
        enemyLink: "https://i.imgur.com/vpxhQEK.png",
        enemyName: "Mushroom",
        enemyHP: "20",
        enemyAttack: "4",
        enemyDefense: "2"
    },
    {
        enemyLevel: 3,
        enemyLink: "https://i.imgur.com/KCiaxyc.png",
        enemyName: "Goblin",
        enemyHP: "30",
        enemyAttack: "5",
        enemyDefense: "3"
    },
    {
        enemyLevel: 4,
        enemyLink: "https://i.imgur.com/r9qUBD7.png",
        enemyName: "Skeleton",
        enemyHP: "40",
        enemyAttack: "7",
        enemyDefense: "4"
    },
    {
        enemyLevel: 5,
        enemyLink: "https://i.imgur.com/MYSSZeL.png",
        enemyName: "Flaming Skull",
        enemyHP: "30",
        enemyAttack: "15",
        enemyDefense: "0"
    },
    {
        enemyLevel: 6,
        enemyLink: "https://i.imgur.com/DcCfdrm.png",
        enemyName: "Clown",
        enemyHP: "10",
        enemyAttack: "20",
        enemyDefense: "10"
    },
    {
        enemyLevel: 7,
        enemyLink: "https://i.imgur.com/IKkNfxJ.png",
        enemyName: "Orc",
        enemyHP: "60",
        enemyAttack: "10",
        enemyDefense: "10"
    },
    {
        enemyLevel: 8,
        enemyLink: "https://i.imgur.com/AwcBbx5.png",
        enemyName: "Golem",
        enemyHP: "100",
        enemyAttack: "4",
        enemyDefense: "15"
    },
]

const finalBoss =
{
    enemyLevel: 99,
    enemyLink: "https://i.imgur.com/cIOapB8.png",
    enemyName: "Ben, The Dark Lord",
    enemyHP: "999",
    enemyAttack: "99",
    enemyDefense: "99"
}

export default function BountyBoard({ handleBattle }) {

    const { username } = useParams();
    const { loading, data } = useQuery(GET_SINGLE_USER, {
        variables: { username: username },
    });
    const characters = data?.singleUser.savedChars || [];

    const [characterSelected, setCharacterSelected] = useState(false);
    const [characterList] = useState(characters);
    const [chosenCharacter, setChosenCharacter] = useState({});

    const handleSelect = (e) => {
        if (!(e.target.value === "select")) {
            setChosenCharacter(characterList[e.target.value]);
            setCharacterSelected(true);
        } else {
            setChosenCharacter('');
            setCharacterSelected(false);
        }
    }

    const handleStartBattle = (e) => {
        const chosenEnemy = enemies[e.target.title - 1];
        const { enemyName, enemyLink, enemyLevel, enemyHP, enemyAttack, enemyDefense } = chosenEnemy;
        const { name, level, health, attack, defense } = chosenCharacter;
        const character = new Player(level, health, attack, defense, chosenCharacter.link, name);
        const enemy = new Player(enemyLevel, enemyHP, enemyAttack, enemyDefense, enemyLink, enemyName);
        handleBattle(character, enemy);
    }

    const handleFinalBattle = (e) => {
        const { enemyName, enemyLink, enemyLevel, enemyHP, enemyAttack, enemyDefense } = finalBoss;
        const { name, level, health, attack, defense } = chosenCharacter;
        const character = new Player(level, health, attack, defense, chosenCharacter.link, name);
        const enemy = new Player(enemyLevel, enemyHP, enemyAttack, enemyDefense, enemyLink, enemyName);
        handleBattle(character, enemy);
    }

    return (
        <div>
            <div className='border-b-4 border-b-gray-300 pb-8'>
                <p className='text-4xl md:text-5xl mb-12 text-teal-400 text-center py-3'>BOUNTY BOARD</p>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div className="flex flex-col lg:max-w-sm mx-auto pb-3">
                        <div className='mx-auto'>
                            <p className='text-2xl mb-4 text-teal-200 text-center'> Choose Your Character</p>
                            <select className="w-full p-2.5 text-teal-200 bg-gray-700 border border-teal-200 rounded-md shadow-sm ring-teal-500 appearance-none focus:border-teal-600"
                                onChange={handleSelect}>
                                <option value="select"> -- Select --</option>
                                {characters &&
                                    characters.map((character, index) => (
                                        <option
                                            key={character._id}
                                            className="rounded-lg border-4 bg-gradient-to-b from-gray-200 to-gray-500 p-2"
                                            value={index}>
                                            {character.name}, Level {character.level}
                                        </option>
                                    ))}
                            </select>
                            {!characterSelected && (
                                <p className="text-xl mt-4 text-slate-50 text-center">
                                    Please select a character to accept a bounty.
                                </p>
                            )}
                        </div>
                        <img className="mx-auto md:w-1/2" src={chosenCharacter.link} alt={chosenCharacter.name}></img>
                    </div>
                )}
            </div>
            <p className='text-4xl mb-12 text-teal-400 text-center mt-8'> Choose A Bounty</p>
            <div className='mt-8 grid lg:grid-cols-2'>
                {enemies &&
                    enemies.map((enemy) => (
                        <div
                            key={enemy.enemyLevel}
                            className='bg-local bg-origin-border bg-contain bg-no-repeat bg-center flex flex-col'
                            style={{ backgroundImage: "url(https://i.imgur.com/faKcT9i.png)" }}>
                            <p className='text-xl text-black text-center pt-12'>Level: {enemy.enemyLevel}</p>
                            <p className='text-3xl text-black  text-center '>{enemy.enemyName}</p>
                            {characterSelected && (
                                <Link
                                    to='/battle'
                                    className='text-3xl text-red-500 hover:text-white mx-auto'
                                    title={enemy.enemyLevel}
                                    onClick={handleStartBattle}>
                                    Accept
                                </Link>
                            )}
                            <img className="w-1/3 mx-auto pb-12" src={enemy.enemyLink} alt={enemy.enemyName + "'s portrait"}></img>
                        </div>
                    ))}
            </div>
            <hr className='mt-20'></hr>
            <p className='text-4xl mb-12 text-teal-400 text-center mt-8'> Or, if you have the guts, <br></br>VANQUISH THE DARK LORD</p>
            <div key={9} className='bg-local bg-origin-border bg-contain bg-no-repeat bg-center mt-12  flex flex-col' style={{ backgroundImage: "url(https://i.imgur.com/faKcT9i.png)" }}>
                <p className='text-xl text-black text-center pt-12'>Level: 99</p>
                <p className='text-3xl text-black  text-center '>Ben, the Dark Lord</p>
                {characterSelected && (
                    <Link
                        to='/battle'
                        className='text-3xl text-red-500 hover:text-white mx-auto'
                        style={{ cursor: 'pointer' }}
                        onClick={handleFinalBattle}>
                        Accept
                    </Link>
                )}
                <img className="w-1/3 mx-auto pb-12" src={"https://i.imgur.com/cIOapB8.png"} alt={"Ben's portrait"}></img>
            </div>
        </div>
    );
}
