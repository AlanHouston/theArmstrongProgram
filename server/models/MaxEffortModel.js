const mongoose = require('mongoose');

var maxEffortSchema = new mongoose.Schema({
    date: String,
    setOne:{
        type:Number
    },
    setTwo:{
        type:Number
    },
    setThree:{
        type:Number
    },
    setFour:{
        type:Number
    },
    setFive:{
        type:Number
    }, 
    total:{
        type:Number
    }
})

module.exports = mongoose.model('MaxEffort', maxEffortSchema);

