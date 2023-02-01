const pg = require('pg');
const url = require('url');
let config = {};

if (process.env.DATABASE_URL) {
    // Heroku gives a url, not a connection object
    // https://github.com/brianc/node-pg-pool
    let params = url.parse(process.env.DATABASE_URL);
    let auth = params.auth.split(':');

    config = {
        user: 'kjensen19',
        host: 'db.bit.io',
        database: 'kjensen19/nexstar', 
        password: process.env.DB_PASS, // key from bit.io database page connect menu
        port: 5432,
        ssl: true,
      };

} else {
    // only change the things on the right side of the ||
    config = {
        user: process.env.PG_USER || null, //env var: PGUSER
        password: process.env.DATABASE_SECRET || null, //env var: PGPASSWORD
        host: process.env.DATABASE_SERVER || 'localhost', // Server hosting the postgres database
        port: process.env.DATABASE_PORT || 5432, //env var: PGPORT
        database: process.env.DATABASE_NAME || 'nexstar', //env var: PGDATABASE or the name of your database 
        max: 10, // max number of clients in the pool
        idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
    };
}

module.exports = new pg.Pool(config);