const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('Siema!');
});

app.listen(3000, 'localhost');
