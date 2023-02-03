const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth,async (req, res) => {
  try {
    res.render('homepage', { 
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




module.exports = router