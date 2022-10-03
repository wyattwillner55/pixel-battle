import React from 'react';

const CharacterList = ({ characters }) => {
    
    if (!characters.length) {
        return <p className='text-4xl md:text-5xl mb-12 text-white text-center py-3'>You have no adventurers registered with the Guild.</p>;
    }

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {characters &&
                characters.map((character) => (
                    <div key={character._id} className="rounded-lg border-4 bg-gradient-to-b from-gray-200 to-gray-500 p-2">
                        <div className='bg-gradient-to-b from-blue-600 to-indigo-900 p-8'>
                            <p className='text-4xl text-teal-200 text-center'>{character.name}</p>
                            <img className="w-2/3 mx-auto" src={character.link} alt={character.name + "'s portrait"}></img>
                            <p className='text-xl text-teal-200'>Level: {character.level}</p>
                            <p className='text-xl text-teal-200'>Attack: {character.attack}</p>
                            <p className='text-xl text-teal-200'>Defense: {character.defense}</p>  
                        </div>
                        
                    </div>

                ))}
        </div>
    );
};

export default CharacterList;
