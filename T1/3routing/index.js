const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/article/new', (req, res) => {
  res.send('New Article');
});
app.get('/article/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Article ${id}`);
});

app.listen(3000, 'localhost');
