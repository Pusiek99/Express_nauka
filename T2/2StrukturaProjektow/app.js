const express = require('express');
const rateLimit = require('express-rate-limit');
const { nameRouter } = require('./routes/name');

const app = express();

const limiter = rateLimit({
  windowMs: 2 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 100 requests per windowMs
});

app.use(limiter);

app.use(express.json());
app.use('/name', nameRouter);

app.listen(3000, 'localhost');
