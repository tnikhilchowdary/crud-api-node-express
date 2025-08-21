const express = require("express");
const app = express();
const mongoose = require("mongoose");


app.get("/", (req, res) => {
    res.send("Welcome to the NodeJS Backend Technology, Which is more important");
});

app.listen(5002, () => {
    console.log("Server is ruuning on port")
});

mongoose.connect(
  "mongodb+srv://admin:password@cluster0.3fst7wa.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
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
