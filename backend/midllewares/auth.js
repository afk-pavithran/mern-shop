const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const authIn = async (req, res, next) => {
    const { token } = req.headers;
    try {
        const decoded = await jwt.verify(token, JWT_SECRET)
        if (decoded)
        {
            req.body.userId = decoded;
            next();
        }
        else throw new Error('Mongo Error')
    } catch (error) {
        res.json(error)
    }
}




module.exports = { authIn}