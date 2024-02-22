export const typeDefs = `#graphql
    # typedef or schema
    type Anime {
        id: ID!
        title: String!
        status: String!
        review: [Review!]
    }
    type Character {
        id: ID!
        name: String!
        anime: Anime!
        review: [Review!]
    }
    type Review {
        id: ID!
        ratings: String!
        content: String!
        anime: Anime!
        character: Character!
    }
    # Defining the entry point
    type Query {
        reviews: [Review]
        review(id: ID!): Review
        animes: [Anime]
        anime(id: ID!): Anime
        characters: [Character]
        character(name: String!): Character
    }

    type Mutation {
        addAnime(anime: addAnimeInput!): Anime
        deleteAnime(id: ID!): [Anime]
        updateAnime(id: ID!, edits: updateAnimeInput!): Anime
    }

    input addAnimeInput {
        title: String!
        status: String!
    }

    input updateAnimeInput {
        status: String!
    }


`