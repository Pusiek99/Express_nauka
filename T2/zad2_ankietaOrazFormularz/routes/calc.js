const express = require('express');

const calcRouter = express.Router();

const app = express();

app.use('/calc', calcRouter);

calcRouter
  .post('/check', (req, res) => {
    const { numberA, numberB } = req.body;
    res.json({ result: numberA % numberB === 0 });
  });

module.exports = {
  calcRouter,
};
