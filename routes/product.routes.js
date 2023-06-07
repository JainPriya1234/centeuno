const express = require('express');
const router = express.Router();
const controller = require('../controller/product.controller');

//product list 
app.get('/api/products/list',controller.Getproductlist );


// get product by id
app.get('/api/products/:id',controller.Getproduct );


module.exports= router;