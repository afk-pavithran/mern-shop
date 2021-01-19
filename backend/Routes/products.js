const express = require('express')
const { createProduct, getProducts, getSingleProduct, getUserProducts } = require('../Controllers/productontroller')
const { authIn } = require('../midllewares/auth')

const productRouter = express.Router()

productRouter.post('/api/products', authIn , createProduct)

productRouter.get('/api/products', authIn, getProducts)

productRouter.get('/api/products/:id', authIn, getSingleProduct)

productRouter.get('/api/userProducts', authIn, getUserProducts)

module.exports = productRouter;