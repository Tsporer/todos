const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = Todo = mongoose.model('todos', TodoSchema);