const express = require("express");
const { authentication } = require("../Middlewares/admin.authentication");
const { userAuthentication } = require("../Middlewares/user.authentication");
const { CartModel } = require("../Models/Cart.Model");
const { ProductModel } = require("../Models/Product.Model");

const ProductRouter = express.Router();

ProductRouter.post("/add",authentication, async (req, res) => {
  try {
    const product = new ProductModel(req.body);
    await product.save();
    res.status(200).send({ msg: "Product Added",product });
  } catch (e) {
    res.status(200).send({ msg: "Product Not Added", err: e.message });
  }
});

ProductRouter.post("/:id",userAuthentication,authentication,async(req,res)=>{
  const ID=req.params.id;

  try{
    const cart=await CartModel.find();
    const product=await ProductModel.findById({_id:ID});
    cart.push(product);
    await cart.save();
    res.send({msg:"Added to Cart",cart})
  }catch(e){
    res.send({error:e.message})
  }

})

ProductRouter.get("/", async (req, res) => {

  const products = await ProductModel.find();
  res.status(200).send(products);
});

ProductRouter.patch("/update/:id",authentication, async (req, res) => {
  const ID = req.params.id;
  const payload = req.body;
  try {
    await ProductModel.findByIdAndUpdate({ _id: ID }, payload);
    res.status(200).send({ msg: "Product Updated" });
  } catch (e) {
    res.status(200).send({ msg: "Product Not Updated", err: e.message });
  }
});

ProductRouter.delete("/delete/:id",authentication, async (req, res) => {
  const ID = req.params.id;

  try {
    await ProductModel.findByIdAndDelete({ _id: ID });
    res.status(200).send({ msg: "Product Deleted" });
  } catch (e) {
    res.status(200).send({ msg: "Product Not Deleted", err: e.message });
  }
});

module.exports = { ProductRouter };
