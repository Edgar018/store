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
    res.json(req.body);
}

productsCtrl.getProduct = (req, res) => {
    const { id } = req.params;
    for(i in products){
        if(products[i].id == id){
            res.json(products[i]);
        }
    }
}

productsCtrl.updateProducts = (req, res) => {
    const { id } = req.params;
    const { author, title, description, price } = req.body;
    for(i in products){
        if(products[i].id == id){
            products[i].author = author;
            products[i].title = title;
            products[i].description = description;
            products[i].price = price;
        }
    }
    res.json('update product')
}

productsCtrl.deleteProducts = (req, res) => {
    const { id } = req.params;
    for(i in products){
        if(products[i].id == id){
            products.splice(i, 1);
        }
    }
    res.json('delete product')
}

module.exports = productsCtrl;