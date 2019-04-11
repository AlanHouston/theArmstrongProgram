const Pyramid = require("../models/PyramidModel");

var date = new Date();
var newDate= (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();

exports.list =  function list(req, res) {
    Pyramid.find().exec().then(p=>{
        return res.json(p);
    });
}

exports.create =  function create(req, res) {
    let newPyramid = new Pyramid({
        date:newDate,
        missedSet:req.body.missedSet,
        lastSet:req.body.lastSet,
        max:req.body.max,
        total:req.body.total
    });
    newPyramid.save();
    return res.json(newPyramid);
}