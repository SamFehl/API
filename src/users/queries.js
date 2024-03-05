const getUsers = "select * from Users";
const getId = "select id from Users";
const addUser = "INSERT INTO users (id, first, last, email, phone) VALUES (id, first, last, email, phone)";
const modUser = "UPDATE users SET first = first, last = last, email = email, phone = phone WHERE id = id;"
const getByID = "select * from users where id=id";

module.exports = {
    getUsers,
    getId,
    addUser,
    modUser,
    getByID,
    
};
