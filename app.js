const express = require("express");
const app = express();
const routes = require("./routes/baseRoutes");
const contacts = require("./routes/contactsRoutes");

const cors = require("cors");

const allowedOrigins = ["http://127.0.0.1:5500"];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "10kb" }));

// Routes
app.use("/", routes);
app.use("/contacts", contacts);

module.exports = app;
