const router = require('express').Router();
let Users = require('../models/users.model');

router.route('/').post((req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.body);
    // console.log(username+' '+password);
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

router.route('/add').post((req,res)=>{
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    const gravatar = req.body.gravatar;
    const occupation = req.body.occupation;
    const time_range = req.body.time_range;

    const newUser = new Users({
        name,
        username,
        password,
        gravatar,
        occupation,
        time_range,
    });

    newUser.save()
    .then(()=> res.json('User added!'))
    .catch((err)=>{res.status(400).json('Error: ' + err)});
});

router.route('/update/:id').post((req,res)=>{
    const updatedUser = {
        name : req.body.name,
        username : req.body.username,
        password : req.body.password,
        gravatar : req.body.gravatar,
        occupation : req.body.occupation,
        time_range : req.body.start_time + '-' + req.body.end_time,
    }
    Users.findByIdAndUpdate(req.params.id,updatedUser)
    .then(()=>res.json('User updated'))
    .catch((err)=>{res.status(400).json('Error: ' + err)});    
});

router.route('/search/:name').get((req,res)=>{
    const username = req.params.name;
    Users.find({username: new RegExp('^'+username,"gi")})
    .then((users)=>{
        res.json(users);
    })
    .catch((err)=>{
        res.status(400).json('Error: '+err);
    });
});

module.exports = router;