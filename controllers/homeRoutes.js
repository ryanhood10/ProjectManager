const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');
// const data = require("../public/js/todolist")
router.get('/', withAuth,async (req, res) => {
  try {

    // if all fails bring in hard data
// const todolistdata = data
// console.log(todolistdata)


    res.render('todolist', {
    });
  } catch (err) {
    res.redirect("login")
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
    try {
      res.render('login', { 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


  router.get('/contact', (req, res) => {
    res.render('contact');
  });

module.exports = router