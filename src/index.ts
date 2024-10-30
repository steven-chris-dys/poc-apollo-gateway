// index.ts

import { ApolloServer } from "@apollo/server";
import { ApolloGateway } from "@apollo/gateway";
import { startStandaloneServer } from "@apollo/server/standalone";

const gateway = new ApolloGateway({
  serviceList: [
    { name: "cart", url: "http://localhost:3001/graphql" },
    { name: "product", url: "http://localhost:3000/graphql" },
  ],
});

const server = new ApolloServer({
  gateway,
});

// Start the server
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }, // Gateway runs on port 4000
});

console.log(`🚀 Gateway ready at ${url}`);
