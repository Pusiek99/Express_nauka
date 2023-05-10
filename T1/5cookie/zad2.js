// const express = require('express');
// const cookieParser = require('cookie-parser');
//
// const app = express();
// app.use(cookieParser());
//
// app
//   .get('/name/set/:name', (req, res) => {
//     let { name } = req.params;
//     res.cookie('name', name);
//     res.send(`Your name: ${name}`);
//   })
//
//   .get('/name/show', (req, res) => {
//     res.send(req.cookies.name);
//   })
//
//   .get('/name/check', (req, res) => {
//     if (req.cookies.name) {
//       res.send(`Your name: ${req.cookies.name}`);
//     } else {
//       res.send('No name');
//     }
//   });
//
// app.listen(3000, 'localhost'); //

// v1 na ciastkach

const express = require('express');
const { readFile, writeFile } = require('fs').promises;

const app = express();

app
  .get('/name/set/:name', async (req, res) => {
    const { name } = req.params;
    await writeFile('./name.txt', name);
    res.send(`Your name: ${name}`);
  })

  .get('/name/show', async (req, res) => {
    const name = await readFile('./name.txt', 'utf-8');
    res.send(`Your name: ${name}`);
  })

  .get('/name/check', async (req, res) => {
    try {
      const name = await readFile('./name.txt', 'utf-8');
      res.send(`Your name: ${name}`);
    } catch (err) {
      res.send('No name');
    }
  });

app.listen(3000, 'localhost'); //
