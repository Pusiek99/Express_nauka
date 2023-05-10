// const express = require('express');
//
// const allowedIps = ['127.0.0.1', 'localhost', '::1', '::ffff:127.0.0.1'];
//
// const app = express();
// app.get('/', (req, res) => {
//   if (allowedIps.includes(req.ip)) {
//     res.end('Welcome');
//   } else {
//     res.status(403).send('Access denied');
//   }
// });
//
// app.listen(3000, 'localhost');
// const express = require('express');
//
// const app = express();
// app.all('/', (req, res) => {
//   res.end(`Welcome ${req.method}`);
// });
//
// app.listen(3000, 'localhost');

// const express = require('express');
//
// const app = express();
//
// const allowedIps = ['127.0.0.1', 'localhost', '::1', '::ffff:127.0.0.1'];
// app.get('/', (req, res) => {
//   if (allowedIps.includes(req.ip)) {
//     const { url, originalUrl, path } = req;
//     res.end(`Paths: url:${url} originalPath:${originalUrl} path:${path}
//     protocol:${req.protocol} ip:${req.ip}`);
//   } else {
//     res.status(403).send('Access denied');
//   }
// });
//
// app.listen(3000, 'localhost');

function fixQuery(url) {
  const qs = new URLSearchParams(url);
  `${qs}`.replace(/\+/g, '%20');
  return qs.toString();
}

const express = require('express');
const { URLSearchParams } = require('url');

const app = express();
let qs = new URLSearchParams({
  a: 1,
  b: 2,
  name: 'Siema kurwa zdzichu!<3',
});
qs = fixQuery(qs);

app.get('/', (req, res) => {
  const explorerinfo = req.header('user-agent');
  res.header('Content-Type', 'application/json');
  res.write(`${JSON.stringify(req.query)}\n`);
  res.write(`${JSON.stringify(explorerinfo)}\n\n`);
  res.end(`${qs}`);
});

app.listen(3000, 'localhost');
