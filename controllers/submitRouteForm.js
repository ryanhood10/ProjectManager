var express = require('express');
const exphbs = require("express-handlebars");
const app = express();
const hbs = exphbs.create({});

// Set up Express to use Handlebars as the view engine
app.engine('handlebars', hbs.engine);
app.set("view engine", "handlebars");


//render the content of calendar into main handlebars
app.get('/', async (req, res) => {

    // res.sendFile(path.join(__dirname, "/"));


})

router.get('/login', async (req, res) => {
    try {
      res.render('login', { 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Serve the Handlebars template on the route 'localhost:3002'

app.get("/contact", (req, res) => {
    res.render("contact");
});



module.exports = app;