const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { ProductModel } = require("../Models/Product.Model");

const { UserModel } = require("../Models/Users.Model");
const UserRouter = express.Router();

UserRouter.post("/register", async (req, res) => {
  const { first_name, last_name, email, mobile, password, address } = req.body;

  const user = await UserModel.find({ email });

  if (user.length === 0) {
    try {
      const newUser = new UserModel({
        first_name,
        last_name,
        email,
        mobile,
        password,
        address,
      });
      await newUser.save();
      res.status(200).send({ msg: "User Registration Suceessful" });
    } catch (e) {
      res.status(400).send({ msg: "Something Went Wrong" });
    }
  } else {
    res.status(200).send({ msg: "User already exist, Please login" });
  }
});

UserRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.find({ email });

  if (user.length > 0 && password == user[0].password) {
    try {
      const token = jwt.sign(
        { userID: user[0]._id, name: user[0].name },
        process.env.userSecretKey
      );
      res.status(200).send({ msg: "Login Suceessful", token: token });
    } catch (e) {
      res.status(400).send({ msg: "Wrong Credentials", err: e.message });
    }
  } else {
    res
      .status(200)
      .send({ msg: "User is not registered,Please register first" });
  }
});




module.exports = { UserRouter };
