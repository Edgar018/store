const productsCtrl = {}

const { v4 } = require('uuid');
const { getConnection } = require('../database');

productsCtrl.getProducts = (req, res) => {
    const products = getConnection().get('products').value();
    res.json(products);
};

productsCtrl.getProduct = (req, res) => {
    const product = getConnection().get('products')
    .find({id:  req.params.id}).value();

    res.json(product);
};

productsCtrl.createProducts = (req, res) => {
    const newProduct = {
        id: v4(),
        name: req.body.author,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
    }
    getConnection().get('products').push(newProduct).write();
    res.json(newProduct);
};

productsCtrl.updateProducts = async (req, res) => {
    const product = await getConnection.get('products')
    .find({id: req.params.id})
    .assign(req.body)
    .write();
    res.json(product);
};

productsCtrl.deleteProducts = (req, res) => {
    const result = getConnection().get('products').remove({id: req.params.id})
    .write();
    res.json(result);
};

productsCtrl.uploadImage = (req, res) => {
    console.log(req.file);
    res.json('recibido');
}

module.exports = productsCtrl;

