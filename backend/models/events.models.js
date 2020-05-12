const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventsSchema = new Schema({
    user_id : {type:Schema.Types.ObjectId, required:true},
    events :[
        {
            title : {type:String, required:true},
            description :{type:String},
            comments : [
                {
                    post : {type:String},
                    user : {type:Schema.Types.ObjectId},
                    gravatar: {type:Buffer}
                }
            ],
            tagged_photos: [
                {
                    image : {type:String},
                }
            ],
            milliTime : {type:String, required:true},
            time : {type:String, required:true}
        }
    ],
    date : {type:String, required:true},
});

const Events = mongoose.model('Events',eventsSchema);

module.exports = Events;