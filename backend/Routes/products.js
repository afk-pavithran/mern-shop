const express = require('express')
const { createProduct, getProducts } = require('../Controllers/productontroller')
const { authIn } = require('../midllewares/auth')

const productRouter = express.Router()

productRouter.post('/api/products', authIn , createProduct)

productRouter.get('/api/products', authIn ,getProducts)

module.exports = productRouter;