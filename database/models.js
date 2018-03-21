const mongoose = require('mongoose');

const HistorySchema = mongoose.Schema({
  id: Number,
  name: String,
  country: String,
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('History', HistorySchema);