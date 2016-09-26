var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var heroSchema = new Schema({
  alias: {type: String, required: true},
  first_name: {type: String},
  last_name: {type: String},
  city: {type: String},
  power_name: {type: String, enum: ['Invisibility', 'Flight', 'Super Speed', 'Heat Vision', 'Super Strength', 'Accelerated Healing', 'Power Blast', 'Animal Affinity']}
});

var Hero = mongoose.model('heroes', heroSchema);
module.exports = Hero;
