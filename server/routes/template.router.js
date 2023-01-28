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

// https://api.openbrewerydb.org/breweries/meta?by_state=minnesota
//     returns: {
//         "total": "182",
//         "page": "1",
//         "per_page": "20"
//     }

//TODO:
    //1. intial query to get total (above)
    //2. Then async calls with proper offsets to build total object
    //3. Cache info in DB?
    //4. Return objects with just required info to client side
router.get('/', (req, res) => {
    const {data}  = axios({
        method: 'GET',
        url: 'https://api.openbrewerydb.org/breweries?by_state=minnesota&per_page=10&page=1'
    }).then( (result) => {
        console.log('result', result.data)
        res.send(result.data)
    }).catch(err => {
        console.log('ERR in TEMPLATE GET:', err);
        res.sendStatus(500)
    })
})

module.exports = router