//require and intialize Express
const express = require('express');
const app = express();
require('dotenv').config()

const sessionMiddleware = require('./modules/session-middleware')
const passport = require('./strategies/user.strategy')

//middleware
// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//for what we always have on page
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;
const templateRouter = require('./routes/template.router')
const favoriteRouter = require('./routes/favorite.router')
app.use('/api/template', templateRouter)
app.use('/api/favorite', favoriteRouter)
/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});