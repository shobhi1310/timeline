const router = require('express').Router();
let Users = require('../models/users.model');

router.route('/').post((req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    Users.find({username:username,password:password})
    .then(user=>{
        res.json(user);
    }).catch((err)=>{
        res.json('Error: '+err);
    })
});

router.route('/details/:id').get((req,res)=>{
    const _id = req.params.id;
    Users.findById(_id)
    .then(user=>{
        res.json(user);
    }).catch((err)=>{
        res.json('Error: '+err);
    })
});

router.route('/create').post((req,res)=>{
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    const gravatar = req.body.gravatar;
    const occupation = req.body.occupation;
    const start_time = req.body.start_time;
    const end_time = req.body.end_time;

    const newUser = new Users({
        name,
        username,
        password,
        gravatar,
        occupation,
        start_time,
        end_time
    });

    newUser.save()
    .then((user)=> res.json(user))
    .catch((err)=>{res.status(400).json('Error: ' + err)});
});

router.route('/update/:id').post((req,res)=>{
    const updatedUser = {
        name : req.body.name,
        username : req.body.username,
        password : req.body.password,
        gravatar : req.body.gravatar,
        occupation : req.body.occupation,
        start_time : req.body.start_time,
        end_time: req.body.end_time
    }
    Users.findByIdAndUpdate(req.params.id,updatedUser)
    .then((user)=>res.json(user))
    .catch((err)=>{res.status(400).json('Error: ' + err)});    
});

router.route('/search/:name').get((req,res)=>{
    const name = req.params.name;
    Users.find({name: new RegExp('^'+name,"gi")})
    .then((users)=>{
        res.json(users);
    })
    .catch((err)=>{
        res.status(400).json('Error: '+err);
    });
});

module.exports = router;