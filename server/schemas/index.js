//! takes the info from typeDefs.js and resolvers.js and exports it.

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

module.exports = { typeDefs, resolvers };
