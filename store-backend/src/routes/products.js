const { Router } = require('express');
const { 
    getProducts, 
    getProduct, 
    createProducts, 
    updateProducts, 
    deleteProducts,
    uploadImage
} 
= require('../controllers/products.controllers');

const router = Router()
    .post(uploadImage);

router.route('/')
    .get(getProducts)
    .post(createProducts)

router.route('/images')
    .post();


router.route('/:id')
    .get(getProduct)
    .put(updateProducts)
    .delete(deleteProducts)

module.exports = router;