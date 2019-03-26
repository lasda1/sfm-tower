const {mergeTypes} = require('merge-graphql-schemas');

const classe = require('./classTypes.js');

const typeDefs= [classe];
module.exports = mergeTypes(typeDefs,{all:true});