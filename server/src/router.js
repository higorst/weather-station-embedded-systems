const express = require('express');
const router = express.Router();

const Station = require('./controllers/station');

router.post('/values', Station.updateValues);

module.exports = router;