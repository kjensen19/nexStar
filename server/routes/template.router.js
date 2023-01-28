const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
const axios = require('axios')

//GET example (without full try/catch and async)
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
router.get('/', (req, res) => {
    const data  = axios({
        method: 'GET',
        url: 'https://api.openbrewerydb.org/breweries?by_state=minnesota&per_page=10&page=1'
    })
    console.log('DATA = ', data)
    .then( result => {
        res.send(data)
    }).catch(err => {
        console.log('ERR in TEMPLATE GET:', err);
        res.sendStatus(500)
    })
})

module.exports = router