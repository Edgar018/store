const { Router } = require('express');
const { getProducts, getProduct, createProducts, updateProducts, deleteProducts } = require('../controllers/products.controllers');
const router = Router();

router.route('/')
    .get(getProducts)
    .post(createProducts)


router.route('/:id')
    .get(getProduct)
    .put(updateProducts)
    .delete(deleteProducts)

module.exports = router;