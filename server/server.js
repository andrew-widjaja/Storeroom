const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const itemsRouter = require('./routes/items');

// app.use(express.static(path.resolve(__dirname, '../index.html')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to /items
app.use('/items', itemsRouter);

// Only serve build and static HTML in production mode
if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

// 404 Route Handler
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

// Global Error Handler
app.use(({ code, error }, req, res, next) => {
  res.status(500).json({ error });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
