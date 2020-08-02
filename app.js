const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

// Database
const db = require("./config/database");

// Test db
db.authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

// Initializations
const app = express();
const gigRoutes = require("./routes/gigs");

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set Static folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.render("index", { layout: "landing" }));

// Gig routes
app.use("/gigs", gigRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
