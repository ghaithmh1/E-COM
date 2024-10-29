const express = require('express');
const UserRoute = express.Router();

const { 
    addUser, 
    getUserById, 
    updateUser, 
    patchUser, 
    deleteUser, 
    getAllUsers, 
    loginUser // Make sure to import loginUser
} = require('../controllers/UserControllers');

// POST /user/addUser
UserRoute.post('/addUser', addUser);

// POST /user/login
UserRoute.post('/login', loginUser); // Add the login route here

// GET /user/:id
UserRoute.get('/:id', getUserById);

// PUT /user/:id
UserRoute.put('/:id', updateUser);

// PATCH /user/:id
UserRoute.patch('/:id', patchUser);

// DELETE /user/:id
UserRoute.delete('/:id', deleteUser);

// GET /user
UserRoute.get('/', getAllUsers);

module.exports = UserRoute;
