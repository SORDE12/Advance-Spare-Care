const express = require("express");
const { userAuthentication } = require("../Middlewares/user.authentication");
const { CartModel } = require("../Models/Cart.Model");
const { ProductModel } = require("../Models/Product.Model");

const CartRouter = express.Router();

CartRouter.post("/:id", userAuthentication, async (req, res) => {
  const ID = req.params.id;
  const { userID } = req.body;
  console.log(userID);
  try {
    const product = await ProductModel.findOne({ _id: ID });
    console.log("18", product);
    
    const cart = await CartModel.insertMany(product);
    console.log(cart);
    res.send({ msg: "Added to Cart", cart });
  } catch (e) {
    res.send({ msg: "Not Added", error: e.message });
  }
});

module.exports = { CartRouter };
