const mongoose = require("mongoose");

const wishListSchema = mongoose.Schema({
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
  userID: { type: String, required: true },
  adminID: { type: String, required: true },
});

const WishListModel = mongoose.model("wishList", wishListSchema);

module.exports = { WishListModel };
