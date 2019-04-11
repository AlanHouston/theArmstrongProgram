const MaxEffort = require("../models/MaxEffortModel");

var date = new Date();
var newDate= (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();

exports.list =  function list(req, res) {
    MaxEffort.find().exec().then(m=>{
        return res.json(m);
    });
}

exports.create =  function create(req, res) {
    let newMax = new MaxEffort({
        date: newDate,
        setOne: req.body.setOne, 
        setTwo: req.body.setTwo, 
        setThree: req.body.setThree, 
        setFour: req.body.setFour, 
        setFive: req.body.setFive, 
        total:req.body.total
    });
    newMax.save();
    return res.json(newMax);
}