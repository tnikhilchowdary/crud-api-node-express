const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the NodeJS Backend Technology");
});

app.listen(5001, () => {
    console.log("Server is ruuning on port")
});