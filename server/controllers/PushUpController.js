const PushUp = require("../models/PushUpModel");

var date = new Date();
var newDate= (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();

exports.list =  function list(req, res) {
    PushUp.find().exec().then(p=>{
        return res.json(p);
    });
}

exports.create =  function create(req, res) {
    let newPushUp = new PushUp({
        date:newDate,
        one:req.body.one,
        two:req.body.two,
        three:req.body.three,
        total:req.body.total
    });
    newPushUp.save();
    return res.json(newPushUp);
}