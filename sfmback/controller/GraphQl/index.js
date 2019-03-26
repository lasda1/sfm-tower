const { makeExecutableSchema } = require('graphql-tools');
const typeDefs = require('./types/index.js');

const resolvers = require('./resolvers/classeResolvers.js');



const schema = makeExecutableSchema ({
    typeDefs,
    resolvers
})
module.exports = schema;