const { Error } = require("mongoose");
const ProductModel = require("../Models/ProductModel");


const createProduct = async (req, res, next) => {

    if (req.body.userId)
    {
        const { name, description, category, price, availability, stock, userId } = req.body;
        try {
            const newProduct = await ProductModel.create({ name, description, category, price, availability, stock, userId })
            if (newProduct)
            {
                res.json(`${newProduct.name} Product added Successfully`)
            }
            else throw new Error('Mongo error')
        } catch (error) {
            res.json(error)
        }
    }
    else {
        res.status(400).json('Authentication failed')
    }
    
    
}

const getProducts = async (req, res, next) => {
    if (req.body.userId)
    {
        try {
            const products = await ProductModel.find()
            if (products)
            {
                res.json(products)
            }
            else throw new Error('Mongo error')
        } catch (error) {
            res.json(error)
        }     
    }
    else {
        res.status(400).json('Authentication failed')
    }
    
}

const getSingleProduct = async (req, res, next) => {
    const { id } = req.params;
    if (req.body.userId)
    {
        try {
            const product = await ProductModel.findOne({ _id: id })
            if (product)
            {
                res.json(product)
            }
            else throw new Error('Mongo error')
            
        } catch (error) {
            res.json(error)
        }
    }
    else {
        res.status(400).json('Authentication failed')
    }

}

const getUserProducts = async (req, res, next) => {
    const { userId } = req.body;
    if (userId)
    {
        try {
            const products = await ProductModel.find({ userId})
            res.json(products)
        } catch (error) {
            res.status(400).json(error)
        }
    }
    else {
        res.status(400).json('Authorization failed')
    }
}

module.exports = {createProduct, getProducts , getSingleProduct, getUserProducts}