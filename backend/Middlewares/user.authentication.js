const jwt = require("jsonwebtoken");
require("dotenv").config()
const userAuthentication = (req, res, next) => {
  const token = req.headers.authorization;


  if (token) {
    jwt.verify(token, process.env.userSecretKey, (err, decoded) => {
      if (decoded) {
        req.body.userID = decoded.userID;
        next();
      } else {
        res.status(403).send({ msg: "User Authorization Error" });
      }
    });
  }else{
    res.status(403).send({ msg: "Invalid Token" });
  }
};

module.exports = { userAuthentication };