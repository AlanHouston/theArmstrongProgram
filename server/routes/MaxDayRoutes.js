const express = require("express");
const router = express.Router();
const {list, create} = require('../controllers/MaxDayController')

router.get('/maxday',list);
router.post('/maxday',create);

module.exports =  router;