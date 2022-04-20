const { model } = require('mongoose');
const models = require('../models/itemsModels');

const itemsController = {};

itemsController.getConsumables = (req, res, next) => {
  models.Consumable.find()
    .exec()
    .then((consumables) => {
      res.locals.allConsumables = consumables;
      next();
    })
    .catch((err) => {
      next({
        code: 500,
        error: err,
      });
    });
};
itemsController.getReagents = (req, res, next) => {
  models.Reagent.find()
    .exec()
    .then((reagents) => {
      res.locals.allReagents = reagents;
      next();
    })
    .catch((err) => {
      next({
        code: 500,
        error: err,
      });
    });
};
itemsController.getEquipment = (req, res, next) => {
  models.Equipment.find()
    .exec()
    .then((equipment) => {
      res.locals.allEquipment = equipment;
      next();
    })
    .catch((err) => {
      next({
        code: 500,
        error: err,
      });
    });
};
itemsController.getCells = (req, res, next) => {
  models.Cell.find()
    .exec()
    .then((cells) => {
      res.locals.allCells = cells;
      next();
    })
    .catch((err) => {
      next({
        code: 500,
        error: err,
      });
    });
};

module.exports = itemsController;
