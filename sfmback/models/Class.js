const mongoose = require('mongoose');

const ClassSchema = mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    description:{
        type:String
    }
    ,
    createdAt:{
        type:Date,
        required: true
    },
    lastupdate:{
        type:Date,
        require:true
    }
    //subscribers+courses
})
const Classe = mongoose.model('Classe',ClassSchema);
module.exports = Classe;