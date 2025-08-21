const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the NodeJS Backend Technology, Which is more important");
});

app.listen(5002, () => {
    console.log("Server is ruuning on port")
});