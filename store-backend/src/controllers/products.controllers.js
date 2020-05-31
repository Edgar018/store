const productsCtrl = {};
const path = require("path");
const fs = require("fs-extra");
const { v4 } = require("uuid");
const { getConnection } = require("../database");

productsCtrl.getProducts = async (req, res) => {
  const products = await getConnection()
  .get("products")
  .value();
  res.json(products);
};

productsCtrl.getProduct = async (req, res) => {

  const product = await getConnection()
  .get("products")
  .find({id: req.params.id})
  .value();
  res.json(product);

};

productsCtrl.getProductsById = async (req, res) => {
  const products = await getConnection()
    .get("products")
    .filter({userId: req.params.id})
    .value();
  console.log(products);

  res.json(products);
};

productsCtrl.createProducts = async (req, res) => {
  const newProduct = {
    id: v4(),
    name: req.body.author,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    imgPath: req.file.path,
  };
  await getConnection().get("products")
  .push(newProduct)
  .write();
  res.json(newProduct);
};

productsCtrl.updateProducts = async (req, res) => {
  const product = await getConnection
    .get("products")
    .find({ id: req.params.id })
    .assign(req.body)
    .write();
  res.json("save");
};

productsCtrl.deleteProducts = async (req, res) => {
  const result = await getConnection()
    .get("products")
    .remove({ id: req.params.id })
    .write();
  if (result) {
    fs.unlink(path.resolve(result.imgPath));
  }
  res.json(result);
};

module.exports = productsCtrl;
