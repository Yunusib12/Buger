const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, 'public')));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ROUTES
const routes = require("./controllers/index.js");

app.use('/', routes);

// Requiring our models for syncing
const db = require("./models");


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log("App listening on PORT " + PORT);
    });
});