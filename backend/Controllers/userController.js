const jwt= require("jsonwebtoken");
const { Error } = require("mongoose");
const { JWT_SECRET } = require("../config");
const UserModel = require("../Models/UserModel");

const getUsers = async (req, res, next) => res.json('get all users')

const createUser = async (req, res, next) => {
    const { fullname, email, password } = req.body;
    try {
        const newUser = await UserModel.create({ fullname, email, password })
        if (newUser)
        {
            const token = await jwt.sign(newUser.id, JWT_SECRET)
            res.json(token)
        }
        else throw new Error('mongo error')
    } catch (error) {
        res.json(error)
    }
}

const logUser = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({email})
        if (user.password === password) {
            const token = await jwt.sign(user.id, JWT_SECRET)
            res.json(token)
        }
        else { throw new Error('mongo error') }
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {getUsers, createUser, logUser}