const mongoose = require('mongoose');

const HistorySchema = mongoose.Schema({
  city: Number,
  country: String,
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('History', HistorySchema);