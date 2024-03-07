const Pool = require('pg').Pool;

const pool = new Pool({
    //Local Connection
    /*
    user: "postgres",
    host: "localhost",
    password: "@gL22031621384",
    database: "api",
    port: "5432",
    */

    //Remote Connection
    ///*
    user: "sjfehl",
    host: "dpg-cna2s6ta73kc73elif7g-a",
    password: "0Gc3BZXLhJT81tMpKKr3MsyD2slFjlPi",
    database: "userspost",
    port: "5432",
    //*/
});

module.exports = pool;