const express = require('express');

const cookieRouter = express.Router();

cookieRouter
  .post('/set', (req, res) => {
    const { name } = req.body;
    res
      .cookie('name', name, {
        maxAge: 1000 * 60 * 60 * 24 * 31,
      })

      .render('layouts/cookie-set', {
        name,
      });
  })
  .get('/show', (req, res) => {
    const { name } = req.body;
    res.render('show-cookie', {
      name,
    });
  })
  .get('/check', (req, res) => {
    const { name } = req.cookies;
    res.send(name === undefined ? 'no cookie' : 'there\'s saved name');
  });

module.exports = {
  cookieRouter,
};
