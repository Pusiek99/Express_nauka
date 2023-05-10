const express = require('express');

const cookieRouter = express.Router();

cookieRouter
  .post('/set', (req, res) => {
    const { name } = req.body;
    res.cookie('name', name, {
      maxAge: 1000 * 60 * 60 * 24 * 31,
    });
    res.send('ok');
  })
  .get('/show', (req, res) => {
    res.send(`Saved name: ${req.cookies.name}`);
  })
  .get('/check', (req, res) => {
    const { name } = req.cookies;
    res.send(name === undefined ? 'no cookie' : 'there\'s saved name');
  });

module.exports = {
  cookieRouter,
};
