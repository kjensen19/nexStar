//require and intialize Express
const express = require('express');
const app = express();
//for processing JSON
const bodyParser = require('body-parser');


//constants for router files here:
    //Ex const playerRouter = require('./routes/player.router')
const templateRouter = require('./routes/template.router')

//Listen for axios requests:
//ex app.use('/api/player', playerRouter)
app.use('/api/template', templateRouter)

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//for what we always have on page
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});