const express = require("express");
require("dotenv").config()
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { AdminModel } = require("../Models/Admin.Model");
const { authentication } = require("../Middlewares/admin.authentication");
const AdminRouter = express.Router();


AdminRouter.post("/register",authentication, async (req, res) => {
  const { name, email, password } = req.body;
  const admin = await AdminModel.find({ email });
  if (admin.length === 0) {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        res.status(400).send({ msg: "Something Went Wrong" });
      } else {
        try {
          const newAdmin = new AdminModel({
            name,
            email,
            password: hash,
            users,
          });
          await newAdmin.save();
          res.status(200).send({ msg: "Admin Registration Suceessful" });
        } catch (e) {
          res.status(400).send({ msg: "Something Went Wrong" });
        }
      }
    });
  } else {
    res.status(200).send({ msg: "Admin already exist, Please login" });
  }
});

AdminRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const admin = await AdminModel.find({ email });

  if (admin.length > 0) {
    bcrypt.compare(password, admin[0].password, async (err, result) => {
      if (result) {
        try {
          const token = jwt.sign(
            { adminID: admin[0]._id, name: admin[0].name },
            process.env.secretKey
          );
          res.status(200).send({ msg: "Login Suceessful", token: token });
        } catch (e) {
          res.status(400).send({ msg: "Wrong Credentials", err: e.message });
        }
      } else {
        res
          .status(400)
          .send({ msg: "Something Went Wrong", error: "Wrong Password" });
      }
    });
  } else {
    res.status(200).send({ msg: "Admin is not registered" });
  }
});

module.exports = { AdminRouter };
