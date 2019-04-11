const express = require("express");
const router = express.Router();
const {list, create} = require('../controllers/PyramidController')

router.get('/pyramid',list);
router.post('/pyramid',create);

module.exports =  router;