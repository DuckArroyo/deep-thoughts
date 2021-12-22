//TODO Standard server
const express = require('express');

//
const path = require('path');

// import ApolloServer //!Apollo requirement
const { ApolloServer } = require('apollo-server-express');

// import our typeDefs and resolvers //!Apollo requirement
const { typeDefs, resolvers } = require('./schemas');

// Middleware function
const { authMiddleware } = require('./utils/auth');

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

// Serve up static assets
// Express.js server to serve any files in the React application's build directory in the client folder. 
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// wildcard GET route for the server
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

//TODO Standard server
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//TODO Standard server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
