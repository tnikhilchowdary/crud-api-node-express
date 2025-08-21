const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the NodeJS Backend Technology, Which is more important");
});

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


