const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res
    .cookie('cookie1', 'elo elo 320')
    .cookie('cookie2', 'od babki', {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
    })
    .send('Hello World');

  app.get('/logout', (req, res) => {
    res
      .clearCookie('cookie2')
      .send('Logged out');
  });
}).listen(3000, 'localhost');
