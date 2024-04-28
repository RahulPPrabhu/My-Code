import { ApolloServer } from 'apollo-server'
import { makeSchema } from '@nexus/schema'
import { DataType, Query } from './schema' // Make sure the path is correct

// Generate the schema
const schema = makeSchema({
  types: [Query, DataType],
})

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    // Make sure the client is sending 'x-timestamp' in the headers
    return { timestamp: req.headers['x-timestamp'] }
  },
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
