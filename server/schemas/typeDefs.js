const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    savedChars: [Character]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Character {
    _id: ID!
    name: String
    link: String
    level: Int
    health: Int
    attack: Int
    defense: Int
  }

  input inputCharacter {
    name: String
    link: String
    level: Int
    health: Int
    attack: Int
    defense: Int
  }

  type Query {
    users: [User]
    singleUser(username: String!): User
    characters: [Character]
    singleCharacter(_id: ID!): Character
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveCharacter(username: String!, newCharacter: inputCharacter!): Character
  }
`;

module.exports = typeDefs;