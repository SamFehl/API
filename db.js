const Pool = require('pg').Pool;

const pool = new Pool({
    //Local Connection
    ///*
    user: "sjfehl",
    host: "localhost",
    password: "@gL22031621384",
    database: "users",
    port: "5503",
    //*/

    //Remote Connection
    /*
    user: "sjfehl",
    host: "localhost",
    password: "@gL22031621384",
    database: "users",
    port: "5503",
    */
});

module.exports = pool;