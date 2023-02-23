const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connection = mongoose.connect(process.env.mongoURL);

module.exports = { connection };
