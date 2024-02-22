import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';

import db from './db.js'

import { typeDefs } from './schema.js'

const resolvers = {
    Query: {
        animes() {
            const title = db.animes.title
            console.log(title)
            return db.animes
        },
        anime(_, args) {
            return db.animes.find((anime) => anime.id === args.id)
        },
        characters() {
            return db.characters
        },
        character(_, args) {
            return db.characters.find((character) => character.name === args.name)
        },
        reviews() {
            return db.reviews
        },
        review(_, args) {
            return db.reviews.find((review) => review.id === args.id)
        }
    },
    Review: {
        anime(parent) {
            return db.animes.find((a) => a.id === parent.anime_id)
        },
        character(parent) {
            return db.characters.find((c) => c.id === parent.character_id)
        }
    },
    Character: {
        anime(parent) {
            return db.animes.find((a) => a.id === parent.anime_id)
        },
        review(parent) {
            return db.reviews.filter((r) => r.character_id === parent.id)
        }
    },
    Anime: {
        review(parent) {
            return db.reviews.filter((a) => a.anime_id === parent.id)
        }
    },
    Mutation: {
        addAnime(_, args) {
            let anime = {
                ...args.anime,
                id: Math.floor(Math.random() * 10000).toString()
            }
            db.animes.push(anime)
            return anime
        },
        deleteAnime(_,args) {
            db.animes = db.animes.filter((a) => a.id !== args.id)
            return db.animes
        },
        updateAnime(_,args) {
            db.animes = db.animes.map((a) => {
              if (a.id === args.id) {
                return {...a, ...args.edits}
              }
              return a
            })
            return db.animes.find((a) => a.id === args.id)
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log('Server Running at port', 4000)