const productsCtrl = {}

const products = require('../models/products');

productsCtrl.getProducts = (req, res) => {
    res.json(products)
};

productsCtrl.createProducts = (req, res) => {
    const { author, title, description, price } = req.body;
    products.push({
        id: products.length,
        author,
        title,
        description,
        price
    });
    res.json('save product');
}

productsCtrl.getProduct = (req, res) => {
    const { id } = req.params.id;
    for(i in products){
        if(id == products[i].id){
            res.json(products[i]);
        }
    }
}

productsCtrl.updateProducts = (req, res) => {
    const { id } = req.params.id
    const { author, title, description, price } = req.body;
    for(i in products){
        if(id == products[i].id){
            products[i].author = author;
            products[i].title = title;
            products[i].description = description;
            products[i].price = price;
        }
    }
    res.json('update product')
}

productsCtrl.deleteProducts = (req, res) => {
    const { id } = req.params.id;
    for(i in products){
        if(id == products[i].id){
            products.splice(i, 1);
        }
    }
    res.json('delete product')
}

module.exports = productsCtrl;