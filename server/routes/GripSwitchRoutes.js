const express = require("express");
const router = express.Router();
const {list, create} = require('../controllers/GripSwitchController')

router.get('/gripswitch',list);
router.post('/gripswitch',create);

module.exports =  router;