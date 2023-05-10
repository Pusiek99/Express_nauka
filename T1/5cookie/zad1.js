const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/:operation/:a/:b', (req, res) => {
  let { operation, a, b } = req.params;

  console.log(`operation: ${operation} a: ${a} b: ${b}`);
  switch (operation) {
    case 'add':
      res.send((Number(a) + Number(b)).toString());
      break;
    case 'subtract':
      res.send((Number(a) - Number(b)).toString());
      break;
    case 'multiply':
      res.send((Number(a) * Number(b)).toString());
      break;
    case 'divide':
      res.send((Number(a) / Number(b)).toString());
      break;
    default:
      res.status(400).send('Invalid operation');
      break;
  }
}).listen(3000, 'localhost');
