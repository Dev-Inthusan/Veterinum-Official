const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/review', productController.createReview);

module.exports = router;
