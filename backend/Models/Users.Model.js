const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: Number, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };

// "first_name": "String",
// "last_name": "String",
// "email": "f44gg5",
// "mobile":2122,
// "password": "String",
// "address":"String"
