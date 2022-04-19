const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://awidj001:QCjQU0Lw8eJlY88n@cluster0.isvmo.mongodb.net/storeroomDB?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'storeroomDB',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const consumableSchema = new Schema({
  name: String,
  catalog: String,
  supplier: String,
  description: String,
  quantity: Number,
});
const Consumable = mongoose.model('Consumable', consumableSchema);

const reagentSchema = new Schema({
  name: String,
  catalog: String,
  supplier: String,
  description: String,
  quantity: Number,
});
const Reagent = mongoose.model('Reagent', reagentSchema);

const cellSchema = new Schema({
  name: String,
  catalog: String,
  supplier: String,
  species: String,
  description: String,
  lastFreeze: String,
});
const Cell = mongoose.model('Cell', cellSchema);

const equipmentSchema = new Schema({
  name: String,
  catalog: String,
  supplier: String,
  description: String,
  lastMaintenance: String,
});
const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = {
  Consumable,
  Reagent,
  Cell,
  Equipment,
};
