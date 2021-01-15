const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');
const productRouter = require('./Routes/products');
const userRouter = require('./Routes/user');

const app = express();

app.use(express.json())
app.use('/', userRouter)

app.use('/', productRouter)

mongoose.connect(process.env.MONGO_URI || MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true} ,() => {
    app.listen(process.env.PORT || 4000, () => console.log('Server and DB connected successfully'))
})