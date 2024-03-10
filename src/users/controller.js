const pool = require('../../db');
const queries = require('../users/queries');

//Get All Users
const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

//Get User by Param (ID)
const getByID = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getByID, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

//Add User
const addUser = (req, res) => {
    const {id, first, last, email, phone} = req.body;
    pool.query(queries.addUser, [id, first, last, email, phone], (error, results) => {
        if (error) throw error;
        res.status(200).send("Added new user successfully.");
    });
};

//Modify Data by Param --- PUT
const modUser = (req, res) => {
    //const id = parseInt(req.params.id);
    const {first, last, email, phone, id} = req.body; 
    pool.query(queries.modUser, [first, last, email, phone, id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Updated user successfully.");
    });
};

//Get List of All User IDs
const getListID = (req, res) => {
    const {id} = req.body; 
    pool.query(queries.getListID, [id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Retrieved all IDs.");
    });
};

module.exports = {
    getUsers,
    getByID,
    addUser,
    modUser,
    getListID,

};
