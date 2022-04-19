/* eslint no-unused-vars: 0 */
const path = require('path');
const express = require('express');
// const db = require('./db/markets');

const app = express();
const port = process.env.PORT || 3000;

// app.use(express.static(path.resolve(__dirname, '../index.html')));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

app.use(({ code, error }, req, res, next) => {
  res.status(code).json({ error });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
