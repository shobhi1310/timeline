const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventsSchema = new Schema({
    user_id : {type:, required:true},
    events :[
        {
            title : {type:Schema.Types.ObjectId, required:true},
            description :{type:String},
            comments : [
                {
                    comment : {type:String},
                }
            ],
            tagged_photos: [
                {
                    image : {type:Buffer}
                }
            ],
        }
    ],
    date : {type:Date, required:true},   
});

const Events = mongoose.model('Events',eventsSchema);

module.exports = Events;