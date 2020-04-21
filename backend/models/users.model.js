const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {type:String,required:true},
    username: {type:String,required:true},
    password: {type:String,required:true},
    gravatar: {type:Buffer},
    occupation: {type:String,required:true},
    time_range: {type:String,required:true},
},{
    timestamps: true,
});

const Users = mongoose.model('Users',userSchema);

module.exports = Users;