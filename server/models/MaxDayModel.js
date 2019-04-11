const mongoose = require('mongoose');

var maxDaySchema = new mongoose.Schema({
    date: String,
    reps: Number,
    totalSets: Number,
    lastSet: Number,
    total: Number
})

module.exports = mongoose.model('MaxDay', maxDaySchema);

