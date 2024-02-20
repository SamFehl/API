const pool = require('../../db');
const queries = require('../users/queries');

//Get All Users
const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

//Get Data by Param
//Add New Data by Param
//Modify Data by Param

module.exports = {
    getUsers,
};
