const classe = require('../../../models/Class.js');

module.exports = {
    Query:{
    classes: (_,$,{models}) => models.class.find(),
    class: (_,{ id },{ models }) => models.class.findById(id)
},
    mutation:{
        addclasse(_, { input }){
            const classe = input;
            classe.save((err,res)=>{
                err ? console.log(err) : console.log('succes :'+res);
            });
        }
    }
};