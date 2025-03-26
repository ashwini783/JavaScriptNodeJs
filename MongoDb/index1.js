//by mrunal

const mongoose = require("mongoose");
const express = require("express");

const dbUrl =
  "mongodb+srv://ashuavhad71:5J08sTvNyGeT7LN2@cluster0.bzk8sbz.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("connected to Db!");
  })
  .catch((err) => {
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
    unique: true,
  },
  product_price: {
    type: Number,
    required: true,
  },
  isStock: {
    type: Boolean,
    default: true,
  },
  category: {
    type: String,
    required: true,
  },
},{timestamps:true});

const ProductModel = mongoose.model("product", productSchema);
const app = express();
app.use(express.json());

app.post("/api/products", async (req, res) => {
  try {
    const body = req.body;
    const product = await ProductModel.create({
      product_name: body.product_name,
      product_price: body.product_price,
      category: body.category,
      isStock: body.isStock,
    });
    res.status(200).json({message:"Product Created"})
  } catch (err) {
    res.status(400).json({message:err.message})
  }
});
app.get('/api/products',async(req,res)=>{
    res.status(201).json({message:"Success"})
})
const PORT = 8004;
app.listen(PORT, () => console.log(`connected to server on PORT ${PORT}`));
