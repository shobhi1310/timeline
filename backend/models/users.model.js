const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {type:String,required:true},
    username: {type:String,required:true},
    password: {type:String,required:true},
    gravatar: {type:String},
    occupation: {type:String,required:true},
    start_time: {type:String,required:true},
    end_time: {type:String,required:true}
},{
    timestamps: true,
});

const Users = mongoose.model('Users',userSchema);

module.exports = Users;