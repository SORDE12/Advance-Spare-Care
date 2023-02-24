const express = require("express");
const { userAuthentication } = require("../Middlewares/user.authentication");
const { ProductModel } = require("../Models/Product.Model");
const { WishListModel } = require("../Models/WishList.Model");

const WishlistRouter = express.Router();

WishlistRouter.post("/add/:id", userAuthentication, async (req, res) => {
  const ID = req.params.id;
  let userID = req.body.userID;
  try {
    let product = await ProductModel.findOne({ _id: ID });
    product._doc.userID = userID;
    const wishList = await WishListModel.insertMany(product);
    res.status(200).send({ msg: "Added to wishList", wishList });
  } catch (e) {
    res.status(404).send({ msg: "Not Added", error: e.message });
  }
});

WishlistRouter.get("/", userAuthentication, async (req, res) => {
  try {
    let userID = req.body.userID;
    let wishListProducts = await WishListModel.find({ userID });

    res.status(200).send({ msg: "All wishList Data", wishListProducts });
  } catch (e) {
    res
      .status(404)
      .send({ msg: "Some Error in getting data", error: e.message });
  }
});


WishlistRouter.patch("/update/:id", userAuthentication, async (req, res) => {
  const payload = req.body;
  const ID = req.params.id;
  try {
    let wishListProducts = await WishListModel.findByIdAndUpdate({ _id: ID }, payload);

    res.status(200).send({ msg: "wishList Data Updated", wishListProducts });
  } catch (e) {
    res.status(404).send({ msg: "wishList data Not Updated", error: e.message });
  }
});

WishlistRouter.delete("/delete/:id", userAuthentication, async (req, res) => {
  const ID = req.params.id;
  try {
    let wishListProducts = await WishListModel.findByIdAndDelete({ _id: ID });

    res.status(200).send({ msg: "Product Removed", wishListProducts });
  } catch (e) {
    res.status(404).send({ msg: "Unable to Remove Product", error: e.message });
  }
});

module.exports = { WishlistRouter };
