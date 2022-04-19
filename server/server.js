const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// app.use(express.static(path.resolve(__dirname, '../index.html')));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

app.use(({ code, error }, req, res, next) => {
  res.status(code).json({ error });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
