import { ApolloServer } from 'apollo-server';
import { execute, subscribe } from 'graphql';
import { useServer } from 'graphql-ws/lib/use/ws';
import { Server } from 'ws';
import { schema } from './schema'; // Your Nexus schema

(async function startServer() {

  const apolloServer = new ApolloServer({ schema });

  apolloServer.listen(4000).then(({ server, url }) => {
    console.log(`🚀 Server ready at ${url}`);

    const wsServer = new Server({
      server,
      path: '/graphql', // Or your GraphQL endpoint path
    });

    useServer(
      {
        schema,
        execute,
        subscribe,
      },
      wsServer
    );
  });
})();
