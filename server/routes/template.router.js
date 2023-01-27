const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

//GET example
// router.get('/', (req, res) => {
//     const query =  
    //SQL text here
//     pool.query(query)
//       .then( result => {
//         res.send(result.rows);
//       })
//       .catch(err => {
//         console.log('ERROR: Get all movies', err);
//         res.sendStatus(500)
//       })
  
//   });