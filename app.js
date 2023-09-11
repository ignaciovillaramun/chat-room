const express = require("express");
const app = express();
const routes = require("./routes/meRoutes");

// Routes
app.use("/", routes);

module.exports = app;
