const mongoose = require('mongoose');

const rateSchema = mongoose.Schema({
        //user + course
        vote:{
            type:Number,
            required:true
        }
});
const rate = mongoose.model('rate',rateSchema);
module.exports =rate;