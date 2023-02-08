//require and intialize Express
const express = require('express');
const app = express();
require('dotenv').config()
//middleware
const sessionMiddleware = require('./modules/session-middleware')
const passport = require('./strategies/user.strategy')
const allBreweriesRouter = require('./routes/allBreweries.router')
const favoriteRouter = require('./routes/favorite.router')
const userRouter = require('./routes/user.router')

// Passport Session Configuration //
app.use(sessionMiddleware);
// start up passport sessions

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

//for what we always have on page
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

app.use('/api/allBreweries', allBreweriesRouter)
app.use('/api/favorite', favoriteRouter)
app.use(`/api/user`, userRouter )
/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});