const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
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
  user: { type: String, required: true },
  quantity: { type: Number, default: 1 },
});

const CartModel = mongoose.model("cart", cartSchema);

module.exports = { CartModel };
