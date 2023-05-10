const express = require('express');
const { voteRouter } = require('./routes/vote');

const app = express();

app.use(express.json());
app.use('/vote', voteRouter);
app.use(express.static('public'));

app.listen(3000, 'localhost');
