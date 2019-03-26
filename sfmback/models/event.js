const mongoose = require('mongoose');

const eventSchema = mongoose.Schema(
    {
        name:{
            type: String,
            require : true
        },
        description:{
            type:String,
            require : true
        },
        lieu:{
            type:String,
            require: true
        },
        pathPicture:{
            type:String ,
            require : true
        },
        maxNum:{
            type: number,
            require: true
        },
        startDate:{
            type:Date,
            require: true
        },
        endDate:{
            type:Date,
            require :true
        },

    }
)
const event = mongoose.model('Event', eventSchema);
module.exports = event;