
//pull in routes

// const events = require('./routes/events');
// app.use('/events', events);
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers/calRoute');

const todo2route = require('./controllers/toDo2Route');

// const helpers = require('./utils/helpers');
const app = express();
const PORT = process.env.PORT || 3002;
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};





app.use(session(sess));

const hbs = exphbs.create({ });

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/'));
//routes variable put in by dev RH
app.use(routes);
app.use(todo2route);


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});