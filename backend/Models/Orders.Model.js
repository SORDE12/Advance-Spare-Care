const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  name: String,
  short_desc: String,
  long_desc: String,
  price: Number,
  category: String,
  strike_price: Number,
  ratings: Number,
  delivery_time: Number,
  size: String,
  quantity: Number,
  address:String,
  image:String,
  user: String,
  userID: String,
  admin: String,
  adminID: String,
});

const OrderModel = mongoose.model("order", orderSchema);

module.exports = { OrderModel };
