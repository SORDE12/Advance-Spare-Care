const express = require("express");
const { userAuthentication } = require("../Middlewares/user.authentication");
const { CartModel } = require("../Models/Cart.Model");
const { ProductModel } = require("../Models/Product.Model");

const CartRouter = express.Router();

CartRouter.post("/add/:id", userAuthentication, async (req, res) => {
  const ID = req.params.id;
  let userID = req.body.userID;
  try {
    let product = await ProductModel.findOne({ _id: ID });
    product._doc.userID = userID;
    const cart = await CartModel.insertMany(product);
    res.status(200).send({ msg: "Added to Cart", cart });
  } catch (e) {
    res.status(404).send({ msg: "Not Added", error: e.message });
  }
});

CartRouter.get("/", userAuthentication, async (req, res) => {
  try {
    let userID = req.body.userID;
    let cartProducts = await CartModel.find({ userID });

    res.status(200).send({ msg: "All Cart Data", cartProducts });
  } catch (e) {
    res
      .status(404)
      .send({ msg: "Some Error in getting data", error: e.message });
  }
});

CartRouter.patch("/update/:id", userAuthentication, async (req, res) => {
  const payload = req.body;
  const ID = req.params.id;
  try {
    let cartProducts = await CartModel.findByIdAndUpdate({ _id: ID }, payload);

    res.status(200).send({ msg: "Cart Data Updated", cartProducts });
  } catch (e) {
    res.status(404).send({ msg: "Cart data Not Updated", error: e.message });
  }
});

CartRouter.delete("/delete/:id", userAuthentication, async (req, res) => {
  const ID = req.params.id;
  try {
    let cartProducts = await CartModel.findByIdAndDelete({ _id: ID });

    res.status(200).send({ msg: "Product Removed", cartProducts });
  } catch (e) {
    res.status(404).send({ msg: "Unable to Remove Product", error: e.message });
  }
});

module.exports = { CartRouter };
