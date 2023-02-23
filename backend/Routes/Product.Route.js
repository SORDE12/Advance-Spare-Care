const express = require("express");
const { authentication } = require("../Middlewares/admin.authentication");
const { ProductModel } = require("../Models/Product.Model");

const ProductRouter = express.Router();

ProductRouter.post("/add", authentication, async (req, res) => {
  try {
    const product = new ProductModel(req.body);
    await product.save();
    res.status(200).send({ msg: "Product Added" });
  } catch (e) {
    res.status(404).send({ msg: "Product Not Added", err: e.message });
  }
});

ProductRouter.get("/", async (req, res) => {
  const { category, min, max, category1 } = req.query;
  console.log(category1);
  if (category && category1) {
    const products = await ProductModel.find({
      $or: [ {category: { $regex: `${category}`, $options: "i" }}, {category: { $regex: `${category1}`, $options: "i" }}],
    });
    res.status(200).send(products);
  } else if (category) {
    const products = await ProductModel.find({
      category: { $regex: `${category}`, $options: "i" },
    });
    res.status(200).send(products);
  } else if (min && max) {
    const products = await ProductModel.find({
      $and: [{ price: { $gte: min } }, { price: { $lte: max } }],
    });
    res.status(200).send(products);
  } else {
    const products = await ProductModel.find();
    res.status(200).send(products);
  }
});

ProductRouter.patch("/update/:id", authentication, async (req, res) => {
  const ID = req.params.id;
  const payload = req.body;
  try {
    await ProductModel.findByIdAndUpdate({ _id: ID }, payload);
    res.status(200).send({ msg: "Product Updated" });
  } catch (e) {
    res.status(404).send({ msg: "Product Not Updated", err: e.message });
  }
});

ProductRouter.delete("/delete/:id", authentication, async (req, res) => {
  const ID = req.params.id;

  try {
    await ProductModel.findByIdAndDelete({ _id: ID });
    res.status(200).send({ msg: "Product Deleted" });
  } catch (e) {
    res.status(404).send({ msg: "Product Not Deleted", err: e.message });
  }
});

module.exports = { ProductRouter };
