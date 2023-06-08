const express = require('express');
const app = express();
const router = express.Router();
const controller = require('../controller/product.controller');

//product list 
router.get('/api/products/list',controller.Getproductlist);


// get product by id
router.get('/api/products/:id',controller.Getproduct );


module.exports= router;