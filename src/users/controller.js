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

//Add New Data by Param --- POST
const addUser = (req, res) => {
    const [id, first, last, email, phone] = req.body;
    pool.query(queries.addUser, [id, first, last, email, phone], (error, results) => {
        if (error) throw error;
        res.status(200).send("Added new user.");
    });
};

//Modify Data by Param --- PUT
const modUser = (req, res) => {
    const [id, first, last, email, phone] = req.body; 
    pool.query(queries.modUser, [id, first, last, email, phone], (error, results) => {
        if (error) throw error;
        res.status(200).send("Updated user successfully.");
    });
};

//Get Single User by  ID
const getByID = (req, res) => {
    pool.query(queries.getByID, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getUsers,
    getId,
    addUser,
    modUser,
    getByID,
};
