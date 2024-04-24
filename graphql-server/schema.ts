// schema.ts
import { makeSchema, objectType, subscriptionField, intArg, nonNull } from 'nexus';
import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

const PostModel = mongoose.model('Post', new mongoose.Schema({
  id: Number,
  title: String,
  body: String,
  published: Boolean
}));

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.int('id')
    t.string('title')
    t.string('body')
    t.boolean('published')
  },
})

export const PostSubscription = subscriptionField('newPost', {
  type: 'Post',
  subscribe: async function* (_, {}, {}) {
    while (true) {
      const posts = await PostModel.find();
      if (posts.length > 0) {
        for (const post of posts) {
          yield post;
          console.log(post);
        }
      }
      await new Promise(res => setTimeout(res, 1000));
    }
  },
  resolve: payload => payload,
});

export const schema = makeSchema({
  types: [Post, PostSubscription],
  outputs: {
    schema: __dirname + '/generated/schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
})
