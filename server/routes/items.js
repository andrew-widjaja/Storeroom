const express = require('express');

const itemsController = require('../controllers/itemsController');

const router = express.Router();

router.get('/', (req, res) => {
  res.json('your reached the main page!');
});
router.get('/consumables', itemsController.getConsumables, (req, res) => {
  //   res.json('here are all of your consumables!');
  res.status(200).json(res.locals.allConsumables);
});
router.get('/reagents', itemsController.getReagents, (req, res) => {
  res.status(200).json(res.locals.allReagents);
});
router.get('/cells', itemsController.getCells, (req, res) => {
  res.status(200).json(res.locals.allCells);
});
router.get('/equipment', itemsController.getEquipment, (req, res) => {
  res.status(200).json(res.locals.allEquipment);
});

module.exports = router;
