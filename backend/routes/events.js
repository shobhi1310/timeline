const router = require('express').Router();
let Events = require('../models/events.models');


router.route('/add/:id').post((req,res)=>{
    const user_id = req.params.id;
    const date = req.body.date;
    const event = {
        "title":req.body.title,
        'description':req.body.description,
        'tagged_photos':req.body.tagged_photos
    }
    // var exists;
    Events.findOneAndUpdate({user_id:user_id,date:date},{$push:{events:event}})
    .then((output)=>{
        res.json(output);
        // console.log(output);
    })
});

router.route('/add/:id').get((req,res)=>{
    const user_id = req.params.id;
    const date = req.body.date;
    Events.find({user_id:user_id,date:date})
    .then(event=>{res.json(event)})
    .catch((error)=>{res.status(400).json('Error: '+error)})
});

module.exports = router;