const getUsers = "select * from users";
const getByID = "select * from users where id = $1";
const addUser = "INSERT INTO users (id, first, last, email, phone) VALUES ($1, $2, $3, $4, $5)";
const modUser = "UPDATE users SET first = $1, last = $2, email = $3, phone = $4 WHERE id = $5";


module.exports = {
    getUsers,
    getByID,
    addUser,
    modUser,

};
