const express = require("express");
const router = express.Router();
const {list, create} = require('../controllers/MaxEffortController')

router.get('/maxeffort',list);
router.post('/maxeffort',create);

module.exports =  router;