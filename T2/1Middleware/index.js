const express = require('express');

const app = express();

app.use(express.json());
app.use(express.static('public'));
let yesVotes = 0;
let noVotes = 0;
app
  .get('/vote/yes', (req, res) => {
    res.send('Dziękujemy za głos!');
    yesVotes++;
  })
  .get('/vote/no', (req, res) => {
    res.send('Dziękujemy za głos!');
    noVotes++;
  })
  .get('/votes/check', (req, res) => {
    res.send(`Głosy na tak: ${yesVotes}, głosy na nie: ${noVotes}`);
  });

app.listen(3000, 'localhost');
