import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    "Non-null list of non-null tracks"
    tracksForHome: [Track!]!
    "A single track"
    track(id: ID!): Track
  }

  type Mutation {
    incrementTrackViews(id: ID!): IncrementedTrackViewsResponse
  }

  type IncrementTrackViewsResponse {
    code: Int!
    sucess: Boolean!
    response: String!
    track: Track
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
    "The track's complete array of Modules"
    modules: [Module!]!
    "Complete description, accepts markdown format"
    description: String
    numberOfViews: Int
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    name: String!
    "src of the profile pic"
    photo: String
  }

  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    "The Module's title"
    title: String!
    "The Module's length in minutes"
    length: Int
  }
`;
