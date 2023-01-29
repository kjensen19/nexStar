//require and intialize Express
const express = require('express');
const app = express();
//for processing JSON
// const bodyParser = require('body-parser');


//constants for router files here:
    //Ex const playerRouter = require('./routes/player.router')


//Listen for axios requests:
//ex app.use('/api/player', playerRouter)


// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//for what we always have on page
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;
const templateRouter = require('./routes/template.router')
app.use('/api/template', templateRouter)
/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});