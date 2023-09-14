const express = require("express");
const app = express();
const contacts = require("./routes/contactsRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const cors = require("cors");

app.use(cors());
app.use(express.json({ limit: "10kb" }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use("/contacts", contacts);

module.exports = app;
