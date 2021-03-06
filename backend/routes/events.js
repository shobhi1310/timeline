const router = require('express').Router();
let Events = require('../models/events.models');


router.route('/create/:id').post((req,res)=>{
    const newEvent = new Events({
        user_id: req.params.id,
        event:[],
        date:req.body.date,
    });

    newEvent.save()
    .then(()=> res.json('new timeline created!'))
    .catch((err)=>{res.status(400).json('Error: ' + err)});
});

router.route('/add/:id').post((req,res)=>{
    const user_id = req.params.id;
    const date = req.body.date;
    // console.log(req.body);
    const event = {
        "title":req.body.title,
        'description':req.body.description,
        'tagged_photos':req.body.tagged_photos,
        'milliTime': req.body.milliTime,
        'time' : req.body.time
    }
    Events.findOneAndUpdate({user_id:user_id,date:date},{$push:{events:event}})
    .then((output)=>{
        res.json(output);
        console.log(output);
    });
});

router.route('/:id/:date').get((req,res)=>{
    const user_id = req.params.id;
    const date = req.params.date;
    console.log(req.body);
    Events.find({user_id:user_id,date:date})
    .then(event=>{
        res.json(event)
    })
    .catch((error)=>{res.status(400).json('Error: '+error)})
});

module.exports = router;