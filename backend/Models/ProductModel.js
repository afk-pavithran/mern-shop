const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    category: {type: String, required: true},
    price: {type: Number, required: true},
    availability: {type: Boolean, required: true},
    stock: { type: Number, required: true },
    userId: {type: Schema.Types.ObjectId, ref:'User'}
})

const ProductModel = model('Product', productSchema)

module.exports = ProductModel;