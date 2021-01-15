const express = require('express');
const { getUsers, createUser, logUser } = require('../Controllers/userController');

const userRouter = express.Router();

userRouter.get('/api/users', getUsers)

userRouter.post('/api/register', createUser)

userRouter.post('/api/login', logUser)


module.exports = userRouter;