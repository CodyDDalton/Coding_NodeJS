const express = require("express");
const router = require("../router/router");
const app = express();

//middleware
app.use(express.json());

app.use("/example", router);

module.exports = app;
