import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        savedChars {
          _id
          name
          link
          level
          health
          attack
          defense
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const SAVE_CHARACTER = gql`
  mutation SaveCharacter($username: String!, $newCharacter: inputCharacter!) {
    saveCharacter(username: $username, newCharacter: $newCharacter) {
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