const router = require('express').Router();
let Events = require('../models/events.models');


router.route('/:id').post((req,res)=>{
    const main_id = req.body.id;
    const event_id = req.params.id;
    const comment = {
        post:req.body.post,
        user:req.body.user_id,
    }
    Events.findOneAndUpdate(
        {
            _id: main_id,
            events:{
                $elemMatch:{_id:event_id}
            }
        },
        {
            $push:{"events.$[outer].comments":comment}
        },
        {
            arrayFilters:[{"outer._id":event_id}]
        }
    )
    .then(()=>{
        res.json("Success");
    })
    .catch(err=>{
        res.json(err);
    })


    // res.json(req.params.id);
});



module.exports = router;