var mongoose = require('mongoose');

var SpaceSchema = new mongoose.Schema({
  name: { type: String },
  completed: Boolean,
  description: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Space', SpaceSchema);