// const express = require('express');
//
// const voteRouter = express.Router();
//
// let yesVotes = 0;
// let noVotes = 0;
// voteRouter
//   .get('/yes', (req, res) => {
//     res.send('Dziękujemy za głos!');
//     yesVotes++;
//   })
//   .get('/no', (req, res) => {
//     res.send('Dziękujemy za głos!');
//     noVotes++;
//   })
//   .get('/check', (req, res) => {
//     res.send(`<p>Głosy na tak: ${yesVotes}</p>
//  <p>Głosy na nie: ${noVotes}</p>`);
//   });
//
// module.exports = {
//   voteRouter,
// };

// zad1 bez gwiazdek.

// TO WAZNE!!TO WAZNE!!TO WAZNE!!TO WAZNE!!TO WAZNE!!TO WAZNE!!TO WAZNE!!TO WAZNE!!TO WAZNE!!TO WAZNE!!
// const express = require('express');
//
// const voteRouter = express.Router();
//
// const votes = {
//
// };
// voteRouter
//   .get('/check', (req, res) => {
//     const info = Object.entries(votes).map(([name, votesCount]) => `Votes on ${name}: ${votesCount}`).join('<br>');
//     res.send(info);
//   })
//   .get('/:voteName', (req, res) => {
//     const { voteName } = req.params;
//     if (votes[voteName] === undefined) {
//       votes[voteName] = 0;
//     }
//     votes[voteName]++;
//     res.send('Dziękujemy za głos!');
//   });
//
// module.exports = {
//   voteRouter,
// };

// zad2 z gwiadką (trudne i fajne rozwiązanie, przydatne!!)
const express = require('express');

const voteRouter = express.Router();
const { IpRestrict } = require('../utils/ip-restrict');

const votes = {

};

const ipRestrict = new IpRestrict();
voteRouter
  .get('/check', (req, res) => {
    const info = Object.entries(votes).map(([name, votesCount]) => `Votes on ${name}: ${votesCount}`).join('<br>');
    res.send(info);
  })
  .get('/:voteName', (req, res) => {
    if (ipRestrict.check(req.ip)) {
      const { voteName } = req.params;
      if (votes[voteName] === undefined) {
        votes[voteName] = 0;
      }
      votes[voteName]++;
      res.send('Thank you for voting!');
    } else {
      res.status(403).send('You have already voted.');
    }
  });

module.exports = {
  voteRouter,
};
