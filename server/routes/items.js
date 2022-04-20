const { Router } = require('express');
const express = require('express');

const itemsController = require('../controllers/itemsController');

const router = express.Router();

// GET ROUTES
router.get('/', (req, res) => {
  res.json('your reached the main page!');
});
router.get('/consumables', itemsController.getConsumables, (req, res) => {
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

// POST ROUTES
router.post('/consumables', itemsController.addConsumable, (req, res) => {
  res.sendStatus(200);
});
router.post('/reagents', itemsController.addReagent, (req, res) => {
  res.sendStatus(200);
});
router.post('/cells', itemsController.addCell, (req, res) => {
  res.sendStatus(200);
});
router.post('/equipment', itemsController.addEquipment, (req, res) => {
  res.sendStatus(200);
});

// DELETE ROUTES
router.delete(
  '/consumables/:id',
  itemsController.deleteConsumable,
  (req, res) => {
    res.sendStatus(200);
  }
);
router.delete('/reagents/:id', itemsController.deleteReagent, (req, res) => {
  res.sendStatus(200);
});
router.delete('/cells/:id', itemsController.deleteCell, (req, res) => {
  res.sendStatus(200);
});
router.delete('/equipment/:id', itemsController.deleteEquipment, (req, res) => {
  res.sendStatus(200);
});

// UPDATE ROUTES
router.put('/consumables/:id', itemsController.updateConsumable, (req, res) => {
  res.sendStatus(200);
});
router.put('/reagents/:id', itemsController.updateReagent, (req, res) => {
  res.sendStatus(200);
});
router.put('/cells/:id', itemsController.updateCell, (req, res) => {
  res.sendStatus(200);
});
router.put('/equipment/:id', itemsController.updateEquipment, (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
