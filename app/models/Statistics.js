const mongoose = require('mongoose');

const StatisticsSchema = new mongoose.Schema({
    totalCompleted: {
        type: Number,
        default: 0
    }
});

const Statistics = mongoose.model('Statistics', StatisticsSchema);

module.exports = Statistics;