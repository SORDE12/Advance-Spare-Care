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
  const {
    category,
    min,
    max,
    category1,
    _sort,
    skip,
    limit,
    desc,
    _order,
    maxRating,
    minRating,
  } = req.query;
  console.log(desc, skip, limit);

  if (category && category1) {
    const products = await ProductModel.find({
      $or: [
        { category: { $regex: `${category}`, $options: "i" } },
        { category: { $regex: `${category1}`, $options: "i" } },
      ],
    });

    res.status(200).send(products);
  } else if (desc) {
    const products = await ProductModel.find({
      desc: { $regex: `${desc}`, $options: "i" },
    })
      .skip(skip < 1 ? 0 : skip * limit)
      .limit(limit);

    res.status(200).send(products);
  } else if (category) {
    const products = await ProductModel.find({
      category: { $regex: `${category}`, $options: "i" },
    })
      .skip(skip < 1 ? 0 : skip * limit)
      .limit(limit);

    res.status(200).send(products);
  } else if (maxRating && minRating) {
    const products = await ProductModel.find({
      $and: [
        { ratings: { $gte: minRating } },
        { ratings: { $lte: maxRating } },
      ],
    })
      .skip(skip < 1 ? 0 : skip * limit)
      .limit(limit);
    res.status(200).send(products);
  } else if (_order && _sort === "price") {
    if (_order == "asc") {
      const products = await ProductModel.find()
        .sort({ price: 1 })
        .skip(skip < 1 ? 0 : skip * limit)
        .limit(limit);
      res.status(200).send(products);
    } else {
      const products = await ProductModel.find()
        .sort({ price: -1 })
        .skip(skip < 1 ? 0 : skip * limit)
        .limit(limit);
      res.status(200).send(products);
    }
  } else if (_order && _sort === "ratings") {
    if (_order == "asc") {
      const products = await ProductModel.find()
        .sort({ ratings: 1 })
        .skip(skip < 1 ? 0 : skip * limit)
        .limit(limit);
      res.status(200).send(products);
    } else {
      const products = await ProductModel.find()
        .sort({ ratings: -1 })
        .skip(skip < 1 ? 0 : skip * limit)
        .limit(limit);
      res.status(200).send(products);
    }
  } else if (_order && _sort === "reviews") {
    if (_order == "asc") {
      const products = await ProductModel.find()
        .sort({ reviews: 1 })
        .skip(skip < 1 ? 0 : skip * limit)
        .limit(limit);
      res.status(200).send(products);
    } else {
      const products = await ProductModel.find()
        .sort({ reviews: -1 })
        .skip(skip < 1 ? 0 : skip * limit)
        .limit(limit);
      res.status(200).send(products);
    }
  } else if (min && max) {
    const products = await ProductModel.find({
      $and: [{ price: { $gte: min } }, { price: { $lte: max } }],
    })
      .skip(skip < 1 ? 0 : skip * limit)
      .limit(limit);

    res.status(200).send(products);
  } else {
    const products = await ProductModel.find()
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
