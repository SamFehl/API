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
const getId = (req, res) => {
    pool.query(queries.getId, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

//Add New Data by Param
const addUser = (req, res) => {
    pool.query(queries.addUser, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

//Modify Data by Param
const modUser = (req, res) => {
    pool.query(queries.modUser, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getUsers,
    getId,
    addUser,
    modUser,
};
