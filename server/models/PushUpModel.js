const mongoose = require('mongoose');

var PushUpSchema = new mongoose.Schema({
    date: String,
    one: Number,
    two: Number,
    three: Number,
    total: Number
})

module.exports = mongoose.model('PushUp', PushUpSchema);