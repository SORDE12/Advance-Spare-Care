const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  image: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  desc: { type: String, required: true },
  category: { type: String, required: true },
  strike_price: { type: Number, required: true },
  ratings: { type: Number, required: true },
  delivery_time: { type: Number, required: true },
  reviews: { type: Number, required: true },
  isActive: { type: Boolean, required: true },
  adminID: { type: String, required: true },
  name: { type: String, required: true },
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel };
