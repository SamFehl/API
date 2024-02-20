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
    host: "dpg-cna2s6ta73kc73elif7g-a",
    password: "0Gc3BZXLhJT81tMpKKr3MsyD2slFjlPi",
    database: "userspost",
    port: "5432",
    */
});

module.exports = pool;