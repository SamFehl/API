const pool = require('pg');

const pool = new pool({
    //Local Connection
    user: "sjfehl",
    host: "localhost",
    password: "@gL22031621384",
    database: "users",
    port: "5503",

    //
});

module.exports = pool;