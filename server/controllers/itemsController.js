const { model } = require('mongoose');
const models = require('../models/itemsModels');

const itemsController = {};

// GET MIDDLEWARE
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

// POST MIDDLEWARE
itemsController.addConsumable = (req, res, next) => {
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

// DELETE MIDDLEWARE
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

// UPDATE MIDDLEWARE
itemsController.updateConsumable = (req, res, next) => {
  const itemToUpdateId = req.params.id;

  models.Consumable.findOneAndUpdate({ _id: itemToUpdateId }, req.body)
    .exec()
    .then(next())
    .catch((err) => {
      next({
        code: 500,
        error: err,
      });
    });
};
itemsController.updateReagent = (req, res, next) => {
  const itemToUpdateId = req.params.id;

  models.Reagent.findOneAndUpdate({ _id: itemToUpdateId }, req.body)
    .exec()
    .then(next())
    .catch((err) => {
      next({
        code: 500,
        error: err,
      });
    });
};
itemsController.updateCell = (req, res, next) => {
  const itemToUpdateId = req.params.id;

  models.Cell.findOneAndUpdate({ _id: itemToUpdateId }, req.body)
    .exec()
    .then(next())
    .catch((err) => {
      next({
        code: 500,
        error: err,
      });
    });
};
itemsController.updateEquipment = (req, res, next) => {
  const itemToUpdateId = req.params.id;

  models.Equipment.findOneAndUpdate({ _id: itemToUpdateId }, req.body)
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
