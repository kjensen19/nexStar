const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
const axios = require('axios')
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');








module.exports = router