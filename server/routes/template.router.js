const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
const axios = require('axios')
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');


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
    var breweryCount = 0
    axios({
        method: 'GET',
        url: 'https://api.openbrewerydb.org/breweries/meta?by_state=minnesota'
    }).then((result) => {
        //Returns needed number of queries to get all data
        breweryCount = (result.data.total / result.data.per_page)
        console.log('Brewery Count', breweryCount)
    })

    const {data}  = axios({
        method: 'GET',
        url: 'https://api.openbrewerydb.org/breweries?by_state=minnesota&per_page=10&page=1'
    }).then( (result) => {
        // console.log('result', result.data)

        res.send(result.data)
    }).catch(err => {
        console.log('ERR in TEMPLATE GET:', err);
        res.sendStatus(500)
    })
})
//object in req.body
// {name: '', street: '', city: '', state: '', postal_code: '', website_url: ''}
router.post('/', (req, res) => {
    const brewery = req.body
    console.log('req.body in POST route', brewery)
    const sqlText = `
        INSERT INTO "breweries"
            ("name", "street", "city", "state", "postal_code", "website_url")
            VALUES($1, $2, $3, $4, $5, $6)
        `
    const sqlValues = [brewery.name, brewery.street, brewery.city, brewery.state, brewery.postal_code, brewery.website_url]
    
    pool.query(sqlText, sqlValues)
    .then((dbres) => {
        res.sendStatus(201)
    }).catch((dbErr) => {
        console.log('error in POST: ', dbErr)
        res.sendStatus(500)
    })
    
})

//DELETE
router.delete('/:id', (req, res) =>{
    console.log('req.params', req.params)
    const sqlText = `
        DELETE from "breweries"
            WHERE id=$1
    `
    pool.query(sqlText, [req.params])
    .then((dbres) =>{
        res.sendStatus(200)
    }).catch((dbErr) => {
        console.log('error in del: ', dbErr)
        res.sendStatus(500)
    })
})

//PUT
router.put('/:id', (req, res) => {
    console.log('req.params(PUT)', req.params)
    const brewery= req.body
    const sqlText = `
    INSERT INTO "breweries"
    ("name", "street", "city", "state", "postal_code", "website_url", "favorite")
        VALUES($1, $2, $3, $4, $5, $6, $7)`
    const sqlValues = [brewery.name, brewery.street, brewery.city, brewery.state, brewery.postal_code, brewery.website_url, true ]
    pool.query(sqlText, sqlValues)
    .then((dbres) => {
        res.sendStatus(200)
    }).catch((dberr) => {
        console.log('error in PUT: ', dberr)
        res.sendStatus(500)
    })
})

module.exports = router

// const {getLinkPreview} = require ("link-preview-js")
// for(let wp of result.data){
//     console.log('???', wp.website_url)
//     if(wp.website_url !== null){
//     getLinkPreview(wp.website_url, {followRedirects: 'follow'}).then((data) =>
//     console.log('does it work?', data)
//     )}};