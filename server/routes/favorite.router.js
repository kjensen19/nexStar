const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
const axios = require('axios')
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

  router.get('/', (req,res) => {
    const sqlText = `
        SELECT * from "breweries"
    `
    pool.query(sqlText)
    .then((dbres) => {
        console.log('dbres.rows', dbres.rows)
        res.send(dbres.rows)
    }).catch((dbErr) => {
        console.log('ERROR in fav GET', dbErr)
        res.sendStatus(500)
    })
  })







module.exports = router


// router.post('/', (req, res) => {
//     const brewery = req.body
//     console.log('req.body in POST route', brewery)
//     const sqlText = `
//         INSERT INTO "breweries"
//             ("name", "street", "city", "state", "postal_code", "website_url")
//             VALUES($1, $2, $3, $4, $5, $6)
//         `
//     const sqlValues = [brewery.name, brewery.street, brewery.city, brewery.state, brewery.postal_code, brewery.website_url]
    
//     pool.query(sqlText, sqlValues)
//     .then((dbres) => {
//         res.sendStatus(201)
//     }).catch((dbErr) => {
//         console.log('error in POST: ', dbErr)
//         res.sendStatus(500)
//     })
    
// })