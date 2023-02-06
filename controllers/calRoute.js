const express = require('express');
const router = require('express').Router();
const exphbs = require('express-handlebars');
const fs = require('fs');
const dayjs = require('dayjs');
const path = require('path')
//const { Router } = require('express');

const hbs = exphbs.create({});
const app = express();

// app.engine('handlebars', handlebars({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//create a calander using an array

//get the number of days in current month 
var daysInMonth = dayjs().daysInMonth();

//populate an array from the amount of days in the month
const calendarDays = Array.from({ length: daysInMonth }, (_, i) => {
    return {
      date: dayjs().set('date', i + 1).format('YYYY-MM-DD'),
      dayOfWeek: dayjs().set('date', i + 1).format('dddd'),
      dayDate: dayjs().set('date', i + 1).format('DD')
    };
  });
  

// use dayJS to grab the day of the week
var dayOfWeek = dayjs().day()

//render the content of calendar into main handlebars
app.get('/', async (req, res) => {
   // res.send('hello world');
   const currentMonth = dayjs().format('MMMM');
  //  res.sendFile(path.join(__dirname, "../index.html"));


})



app.get('/calendar', (req, res) => {
  //  const templateFile = fs.readFileSync('./views/calendar.handlebars', 'utf8');
  //  const compiledTemplate = handlebars.compile(templateFile);
    const currentMonth = dayjs().format('MMMM');
    const currentYear = dayjs().format('YYYY');
    const dayDate = dayjs().format('D')
 

    res.render('calendar', { dayDate, currentMonth,daysInMonth, calendarDays,dayOfWeek, currentYear})
    
   // res.render('calendar', { currentMonth, currentYear });
});





//link the calendar css

app.use(express.static(path.join(__dirname, "public")));

app.get("/calendar.css", function (req, res) {
  res.set("Content-Type", "text/css");
  res.sendFile(__dirname + "/calendar.css");
});




module.exports = app;
