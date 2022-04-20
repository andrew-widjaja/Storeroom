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
itemsController.addConsumable = (req, res, next) => {
  console.log(req.body);
  models.Consumable.create(req.body)
    .exec()
    .then(next())
    .catch((err) => {
      next({
        code: 500,
        error: err,
      });
    });
};
itemsController.addReagent = (req, res, next) => {
  console.log(req.body);
  models.Reagent.create(req.body)
    .exec()
    .then(next())
    .catch((err) => {
      next({
        code: 500,
        error: err,
      });
    });
};
itemsController.addCell = (req, res, next) => {
  console.log(req.body);
  models.Cell.create(req.body)
    .exec()
    .then(next())
    .catch((err) => {
      next({
        code: 500,
        error: err,
      });
    });
};
itemsController.addEquipment = (req, res, next) => {
  console.log(req.body);
  models.Equipment.create(req.body)
    .exec()
    .then(next())
    .catch((err) => {
      next({
        code: 500,
        error: err,
      });
    });
};

// Delete handlers
itemsController.deleteConsumable = (req, res, next) => {
  const itemToDeleteId = req.params.id;

  models.Consumable.deleteOne({ _id: itemToDeleteId })
    .exec()
    .then(next())
    .catch((err) => {
      next({
        code: 500,
        error: err,
      });
    });
};
itemsController.deleteReagent = (req, res, next) => {
  const itemToDeleteId = req.params.id;

  models.Reagent.deleteOne({ _id: itemToDeleteId })
    .exec()
    .then(next())
    .catch((err) => {
      next({
        code: 500,
        error: err,
      });
    });
};
itemsController.deleteCell = (req, res, next) => {
  const itemToDeleteId = req.params.id;

  models.Cell.deleteOne({ _id: itemToDeleteId })
    .exec()
    .then(next())
    .catch((err) => {
      next({
        code: 500,
        error: err,
      });
    });
};
itemsController.deleteEquipment = (req, res, next) => {
  const itemToDeleteId = req.params.id;

  models.Equipment.deleteOne({ _id: itemToDeleteId })
    .exec()
    .then(next())
    .catch((err) => {
      next({
        code: 500,
        error: err,
      });
    });
};

module.exports = itemsController;
