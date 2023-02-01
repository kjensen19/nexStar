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
          WHERE "id"=$1
    `
    pool.query(sqlText, [req.user.id])
    .then((dbres) => {
        //console.log('dbres.rows', dbres.rows)
        res.send(dbres.rows)
    }).catch((dbErr) => {
        //console.log('ERROR in fav GET', dbErr)
        res.sendStatus(500)
    })
  })

  router.put('/:id', (req, res) => {
    //console.log('req.params(PUT)', req.body, 'id:', req.user.id)
    const brewery= req.body
    const sqlText = `
        UPDATE "breweries"
            SET "name"=$1, "street"=$2, "city"=$3, "state"=$4, "postal_code"=$5, "website_url"=$6
            WHERE "id"=$7 AND "user_id"=$8
        `
    const sqlValues = [brewery.name, brewery.street, brewery.city, brewery.state, brewery.postal_code, brewery.website_url, brewery.id, req.user.id]
    pool.query(sqlText, sqlValues)
    .then((dbres) => {
        res.sendStatus(200)
    }).catch((dberr) => {
        console.log('error in PUT: ', dberr)
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