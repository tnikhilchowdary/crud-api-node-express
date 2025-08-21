const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Welcome to the NodeJS Backend Technology, Which is more important");
});

app.post("/api/products", (req, res) => {
  console.log(req.body);
  res.send(req.body);
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


