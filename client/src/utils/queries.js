import { gql } from '@apollo/client';

export const GET_SINGLE_USER = gql`
  query SingleUser($username: String!) {
    singleUser(username: $username) {
      _id
      username
      email
      savedChars {
        _id
        health
        link
        name
        level
        attack
        defense
      }
    }
  }
`;

export const GET_SINGLE_CHARACTER = gql`
  query singleCharacter($id: ID!) {
    singleCharacter(_id: $id) {
      _id
      name
      link
      level
      health
      attack
      defense
    }
  }
`;

