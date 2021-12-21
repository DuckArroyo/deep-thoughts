//! The resolver will serve the response
// importing thoughts and users
const { User, Thought } = require('../models');

//Resolver for thoughts
const resolvers = {
  Query: {
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
  },
};

module.exports = resolvers;
