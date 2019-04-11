const express = require("express");
const router = express.Router();
const {list, create} = require('../controllers/PushUpController')

router.get('/pushup',list);
router.post('/pushup',create);

module.exports =  router;