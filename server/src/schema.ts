import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    "Non-null list of non-null tracks"
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    "main author"
    author: Author!
    "src of the track illustration"
    thumbnail: String
    "time in minutes"
    length: Int
    modulesCount: Int
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    name: String!
    "src of the profile pic"
    photo: String
  }
`;
