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

    router.get('/all', async (req, res) =>{
        const dataStore = []
        var breweryCount = 0
        const apiResources = []
        try{
            axios({
                method: 'GET',
                url: 'https://api.openbrewerydb.org/breweries/meta?by_state=minnesota'
        }).then((result) => {
            //Returns needed number of queries to get all data at 50 per page
            breweryCount = Math.ceil((result.data.total / 50))
            console.log('Brewery Count', breweryCount)
            for(let i=1;i<=breweryCount;i++){
                apiResources.push(`https://api.openbrewerydb.org/breweries?by_state=minnesota&per_page=50&page=${i}`)
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
            //Sort the resulting array of objects by name
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
// router.get('/', (req, res) => {
//     var breweryCount = 0
//     axios({
//         method: 'GET',
//         url: 'https://api.openbrewerydb.org/breweries/meta?by_state=minnesota'
//     }).then((result) => {
//         //Returns needed number of queries to get all data at 50 per page
//         breweryCount = Math.ceil((result.data.total / 50))
//         console.log('Brewery Count', breweryCount)
//     })

//     const {data}  = axios({
//         method: 'GET',
//         url: 'https://api.openbrewerydb.org/breweries?by_state=minnesota&per_page=50&page=1'
//     }).then( (result) => {
//         // console.log('result', result.data)

//         // res.send(result.data)
//     }).catch(err => {
//         console.log('ERR in TEMPLATE GET:', err);
//         res.sendStatus(500)
//     })
// })
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
    const sqlValues = [brewery.name, brewery.street, brewery.city, brewery.state, brewery.postal_code, brewery.website_url]
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


    //Function to write all of the query to DB
// async function writeToDB(){
//     const connection = await pool.connect();
//     const sqlText = `
//     INSERT INTO "breweries"
//     ("name", "street", "city", "state", "postal_code", "website_url")
//         VALUES($1, $2, $3, $4, $5, $6)`
//     try{
        
//         await connection.query('BEGIN');
//         for(let brewObj of dataStore){
//             for(let brewery of brewObj){
//                 if(brewery.name !== null && brewery.state !== null){
//                     await connection.query(sqlText, [brewery.name, brewery.street, brewery.city, brewery.state, brewery.postal_code, brewery.website_url])
//                 }}}
//     await connection.query('COMMIT;');
//     res.sendStatus(200)

//     }catch(err){
//         await connection.query('ROLLBACK;');
//         console.log('Error write to DB', err)
//         res.sendStatus(500);
//     }finally{
//         connection.release()
//     }}