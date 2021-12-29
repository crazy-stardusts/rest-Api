const moongoose = require("mongoose");

const profileSchema = new moongoose.Schema({
    name : {
        type : String,
        trim : true,
        required : true
    },
    dob : {
        type : Date,
        required : true
    },
    status  : {
        type : String,
        enum : ['ACTIVE', 'PAUSED'],
        default : 'ACTIVE'
    }
})

module.exports = moongoose.model('profile', profileSchema);