var express = require('express');
const exphbs = require("express-handlebars");
const app = express();
const hbs = exphbs.create({});

// Set up Express to use Handlebars as the view engine
app.engine('handlebars', hbs.engine);
app.set("view engine", "handlebars");


//render the content of calendar into main handlebars
app.get('/', async (req, res) => {

  //  res.sendFile(path.join(__dirname, "../index.html"));
 
 
 })
 
 
// Serve the Handlebars template on the route 'localhost:3001/todo2'

app.get("/toDoList2", (req, res) => {
  res.render("toDoList2");
});



module.exports = app;
