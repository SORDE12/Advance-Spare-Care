const express = require("express");
require("dotenv").config();
const { connection } = require("./Config/db");
const cors = require("cors");
const { AdminRouter } = require("./Routes/Admin.Route");
const { UserRouter } = require("./Routes/User.Route");
const { ProductRouter } = require("./Routes/Product.Route");
const { CartRouter } = require("./Routes/Cart.Router");
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send({ msg: "Api is working fine" });
});

app.use("/admin", AdminRouter);
app.use("/users", UserRouter);
app.use("/products", ProductRouter);
app.use("/cart", CartRouter);


app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (e) {
    console.log("Not Connected to DB");
  }
  console.log(`Server is running on port ${process.env.port}`);
});
