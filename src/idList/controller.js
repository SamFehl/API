const pool = require('../../db');
const queries = require('../idList/queries');


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
    pool.query(queries.getListID, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getByID,
    addUser,
    modUser,
    getListID,

};
