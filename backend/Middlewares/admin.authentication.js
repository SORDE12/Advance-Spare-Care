const jwt = require("jsonwebtoken");
require("dotenv").config()
const authentication = (req, res, next) => {
  const token = req.headers.authorization;


  if (token) {
    jwt.verify(token, process.env.secretKey, (err, decoded) => {
      if (decoded) {
        console.log(decoded)
        req.body.admin = decoded.name;
        req.body.adminID = decoded.adminID;
        console.log(req.body)
        next();
      } else {
        res.status(403).send({ msg: "Authorization Error" });
      }
    });
  }else{
    res.status(403).send({ msg: "Invalid Token" });
  }
};

module.exports = { authentication };