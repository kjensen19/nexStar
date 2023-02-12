const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
const axios = require('axios')
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');
  




// https://api.openbrewerydb.org/breweries/meta?by_state=minnesota
//     returns: {
//         "total": "182",
//         "page": "1",
//         "per_page": "20"
//     }

    router.get('/all/:state', rejectUnauthenticated, async (req, res) =>{
        const dataStore = []
        var breweryCount = 0
        const apiResources = []
        const state = req.params.state
        console.log('req.params', req.params)
        try{
            axios({
                method: 'GET',
                url: `https://api.openbrewerydb.org/breweries/meta?by_state=${state}`
        }).then((result) => {
            //Returns needed number of queries to get all data at 50 per page
            breweryCount = Math.ceil((result.data.total / 50))
            //console.log('Brewery Count', breweryCount)
            for(let i=1;i<=breweryCount;i++){
                apiResources.push(`https://api.openbrewerydb.org/breweries?by_state=${state}&per_page=50&page=${i}`)
            }
            //async function to access each API endpoint and await data
            async function getResource(resource) {
                const { data } = await axios({
                    method: 'GET',
                    url: resource})
                    for(let d of data){
                        dataStore.push(d)
            }}
    //maps through API array, creates an array of promises that when fulfilled supply the needed information
            async function getAllResources() {
                const apiPromises = apiResources.map(getResource)
                await Promise.all(apiPromises)   
            }
             getAllResources().then(promiseRes =>{
        }).then((result) =>{   
            //Sort the resulting array of objects by name since async array isn't always returned in query order
            dataStore.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
          });
            res.send(dataStore)})
        }
    )}catch{
        console.log('GET error')
        res.sendStatus(500)
    }})

    //POST
router.post('/', rejectUnauthenticated, (req, res) => {
    console.log("user in POST", req.user)
    const brewery = req.body
    console.log('req.body in POST route', brewery)
    //SQL query to check if the user has already favorited a brewery
    const sqlText = `
        INSERT INTO "breweries"
            ("name", "street", "city", "state", "postal_code", "phone", "website_url", "favorite", "user_id")
            SELECT $1, $2, $3, $4, $5, $6, $7, $8, $9
              WHERE not exists (
                select null from breweries
                  where ("name", "user_id") = ($10, $11)
            )
        `
    const sqlValues = [brewery.name, brewery.street, brewery.city, brewery.state, brewery.postal_code, brewery.phone, brewery.website_url, true, req.user.id, brewery.name, req.user.id]
    
    pool.query(sqlText, sqlValues)
    .then((dbres) => {
        res.sendStatus(201)
    }).catch((dbErr) => {
        console.log('error in POST: ', dbErr)
        res.sendStatus(500)
    })
    
})
//DELETE
router.delete('/:id', rejectUnauthenticated, (req, res) =>{
    console.log('req.params', req.params)
    const sqlText = `
        DELETE from "breweries"
            WHERE "id"=$1 AND "user_id"=$2
    `
    pool.query(sqlText, [req.params.id, req.user.id])
    .then((dbres) =>{
        res.sendStatus(200)
    }).catch((dbErr) => {
        console.log('error in del: ', dbErr)
        res.sendStatus(500)
    })
})

module.exports = router
