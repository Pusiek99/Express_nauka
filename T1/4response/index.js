const express = require('express');
const { join } = require('path');

const app = express();

app.get('/', (req, res) => {
  // // res.sendFile(join(__dirname, 'rafon.png'));
  // res.sendFile('rafon.png', {
  //   root: join(__dirname, 'rafon'),
  //   // lastModified: jesli nie ustawiony, to po kazdym odswiezeniu strony w przegladarce, przegladarka bedzie
  //   // pobierala kazdy plik ponownie. w innym wypadku, jesli to bedzie ciagle ten sam plik, nie bedzie go pobierac,
  //   // zaoszczedzajac na transferze i zwieszajac plynnosc UX
  //   // headers: {
  //   //   'X-Siemano-Pa-Co-Robie': 'essaa',
  //   // },
  //   // dotfiles: 'ignore',
  // });
  // res.set({
  //   'X-Siemano-Pa-Co-Robie': 'essaa',
  // });
  res
    .cookie('ciastko', 'elo elo 320')
    .send('Hello World');
}).listen(3000, 'localhost');
