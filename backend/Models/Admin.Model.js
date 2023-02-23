const mongoose = require("mongoose");
const { UserModel } = require("./Users.Model");


const adminSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const AdminModel = mongoose.model("admin", adminSchema);

module.exports = { AdminModel };


// {
//   "email":"ba@gmail.com",
//   "password":"2222"
// }