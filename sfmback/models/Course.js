const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    desciption:{
        type:String,
        required : true
    },
    type:{
        type:String,
        required:true
    },
    link:{
        type:String
    },
    content:{
        type:Array
    }
    //rate + author
})
const course = mongoose.model('Course',CourseSchema);
module.exports = course;