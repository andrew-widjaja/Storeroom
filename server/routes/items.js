const express = require('express');

const itemsController = require('../controllers/itemsController');

const router = express.Router();

router.get('/', (req, res) => {
  res.json('your reached the main page!');
});
router.get('/consumables', itemsController.getConsumables, (req, res) => {
  res.json('here are all of your consumables!');
});
router.get('/reagents', (req, res) => {
  res.json('here are all of your reagents!');
});
router.get('/cells', (req, res) => {
  res.json('here are all of your cells!');
});
router.get('/equipment', (req, res) => {
  res.json('here are all of your equipment!');
});

module.exports = router;
