//TODO Standard server
const express = require('express');

// import ApolloServer //!Apollo requirement
const { ApolloServer } = require('apollo-server-express');

// import our typeDefs and resolvers //!Apollo requirement
const { typeDefs, resolvers } = require('./schemas');

//TODO Standard server
const db = require('./config/connection');

//TODO Standard server
const PORT = process.env.PORT || 3001;
const app = express();

//!Apollo requirement
const startServer = async () => {
  // create a new Apollo server and pass in our schema data
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });
  // Start the Apollo server
  await server.start();

  // integrate our Apollo server with the Express application as middleware
  server.applyMiddleware({ app });

  // log where we can go to test our GQL API
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

//!Apollo requirement
// Initialize the Apollo server
startServer();

//TODO Standard server
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//TODO Standard server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
