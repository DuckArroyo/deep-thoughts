//! The resolver will serve the response

const resolvers = {
    Query: {
      helloWorld: () => {
        return 'Hello world!';
      }
    }
  };
  
  module.exports = resolvers;