var express = require('express');
var router = express.Router();
var Event =require('../models/event');
router.post('/addEvent', function(req, res, next) {
    const event =new Event({
        name: req.body.name,
        description: req.body.description,
        lieu: req.body.lieu,
        pathPicture: req.body.pathPicture,
        maxNum: req.body.maxNum,
        startDate: req.body.startDate,
        endDate: req.body.endDate

    });
  
    console.log(event)
    event
    .save()
    .then(res=>{
        console.log(res);
        
    })
    .catch(err=>{
        console.log(err)
    });
    res.status(200).json({
        message:"created",
        createdEvent:event
    })
  });
  
router.get('/getEvent/:id',(req,res,next)=>{
    const id = req.params.id;
    Event.findById(id)
    .exec()
    .then(doc=>{
        res.status(200).json(doc);
    })
    .catch(err=>{
        res.status(500).json({
            message: "could not find"
        })
    });
})
router.put('/updateEvent/:id',(req,res,next)=>{
    const id =req.params.id;
    const updateOps={};
    for (const [key, value] of Object.entries(req.body)) {
        updateOps[key]= value;
    }
    console.log(id)
    Event.updateOne({_id:id},{$set: updateOps})
    .exec()
    .then(doc=>{
       res.status(200).json(doc)
    })
    .catch(err=>{
        res.status(500).json(err)
    });
})
  module.exports = router;
  