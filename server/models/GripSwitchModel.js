const mongoose = require('mongoose');

var gripSwitchSchema = new mongoose.Schema({
    date: String,
    overHandReps: Number,
    inwardReps: Number,
    wideReps: Number,
    overHandSets: Number,
    inwardSets: Number,
    wideSets: Number,
    total: Number
})

module.exports = mongoose.model('GripSwitch', gripSwitchSchema);

