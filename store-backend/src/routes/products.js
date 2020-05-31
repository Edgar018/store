const { Router } = require('express');
const { 
    getProducts, 
    getProduct, 
    getProductsById,
    createProducts, 
    updateProducts, 
    deleteProducts,
} 
= require('../controllers/products.controllers');
const multer = require('../libs/multer');

const router = Router()

router.route('/productsUser/:id')
    .get(getProductsById)

router.route('/')
    .get(getProducts)
    .post(multer.single('image'), createProducts)


router.route('/:id')
    .get(getProduct)
    .put(updateProducts)
    .delete(deleteProducts)

module.exports = router;