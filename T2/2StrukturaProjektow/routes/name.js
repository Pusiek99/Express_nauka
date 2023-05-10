const express = require('express');
const { readFile, writeFile } = require('fs').promises;

const nameRouter = express.Router();

const FILE_NAME = './data/name.txt';

nameRouter
  .get('/set/:name', async (req, res) => {
    const { name } = req.params;
    await writeFile(FILE_NAME, name);
    res.send(`Your name: ${name}`);
  })

  .get('/show', async (req, res) => {
    const name = await readFile(FILE_NAME, 'utf-8');
    res.send(`Your name: ${name}`);
  })

  .get('/check', async (req, res) => {
    try {
      const name = await readFile(FILE_NAME, 'utf-8');
      res.send(`Your name: ${name}`);
    } catch (err) {
      res.send('No name');
    }
  });

module.exports = {
  nameRouter,
};
