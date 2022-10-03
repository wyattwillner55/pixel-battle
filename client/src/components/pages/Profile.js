import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { GET_SINGLE_USER } from '../../utils/queries';

import CharacterList from '../CharacterList'

export default function Profile() {
    const { username } = useParams();
    const { loading, data } = useQuery(GET_SINGLE_USER, {
        variables: { username: username },
    });
    const characters = data?.singleUser.savedChars || [];
    return (
        <div>
            <p className='text-4xl md:text-5xl mb-12 text-teal-400 text-center py-3'>Your Characters</p>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <CharacterList characters={characters} />
            )}
        </div>
    );
}
