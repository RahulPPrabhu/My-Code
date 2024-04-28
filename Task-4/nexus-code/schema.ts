import fastify from 'fastify'
const signer = require('@autotelic/fastify-timestamp-singer')
import mongoose from 'mongoose'
import NodeCache from 'node-cache'
import { objectType, stringArg } from 'nexus'

const myCache = new NodeCache()

const uri = 'mongodb://127.0.0.1:27017/test';

// Connect to MongoDB
mongoose.connect(uri)
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((err) => {
    console.log("Error: ", err)
  })

// Create a fastify instance
const server = fastify()

// Register the fastifyTimestampSigner plugin
server.register(signer, { secret: 'your-secret-string' })

export const DataType = objectType({
  name: 'Data',
  definition(t) {
    t.string('timestamp')
    t.string('data')
  },
})

// Define your Query
export const Query = objectType({
  name: 'Query',
  definition(t) {
    t.field('getData', {
      type: DataType,
      args: {
        timestamp: stringArg(),
      },
      resolve: async (_, { timestamp }) => {
        const data = await mongoose.connection.db.collection('posts').findOne({})
        const cachedTimestamp = myCache.get("timestamp")
        if (timestamp && timestamp === cachedTimestamp) {
          return { timestamp: cachedTimestamp, data: "No change" }
        } else {
          // Use the sign method from the timestampSigner decorator
          const newTimestamp = await server.sign('your-string-to-sign')
          myCache.set("timestamp", newTimestamp)
          return { timestamp: newTimestamp, data: data?.data }
        }
      },
    })
  },
})
