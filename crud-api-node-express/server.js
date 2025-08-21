const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productmodels.js");
const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Welcome to the NodeJS Backend Technology, Which is more important");
});

app.get('/api/product', async (req, res) => {
  try{
    const prod = await Product.find({});
    res.status(200).json(prod)
  }
  catch(error){
    res.status(500).json({message: error.message})
  }
})

app.post("/api/products", async (req, res) => {
  try{
    const product = await Product.create(req.body);
    res.status(200).json(product)
  }
  catch(error){
    res.status(500).json({message: error.message})
  }
})


mongoose.connect(
  "mongodb+srv://tnikhilchowdary:abcd@cluster0.qnejuqh.mongodb.net/TNC?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => {
  console.log("✅ Connected to Database");
  app.listen(5002, () => {
    console.log("🚀 Server is running on port 5002");
  });
})
.catch((err) => {
  console.error("❌ Connection failed:", err);
});


