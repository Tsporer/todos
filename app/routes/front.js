const express = require('express');
const Todo = require('./../models/Todo');
const Statistics = require('./../models/Statistics');

const router = express.Router();

const initStatistics = async () => {
    let stats = await Statistics.findOne();
    if (!stats) {
        stats = new Statistics();
        await stats.save();
    }
};

initStatistics();

// Home page route
router.get('/', async (req, res) => {
    const todos = await Todo.find();
    const stats = await Statistics.findOne();

    const totalTasks = todos.length;
    const completedTasks = todos.filter((todo) => todo.completed).length;
    const uncompletedTasks = totalTasks - completedTasks;
    const completionPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

    console.log("completion percentage: ", completionPercentage)

    res.render("todos", {
        tasks: todos,
        totalCompleted: stats.totalCompleted,
        completionPercentage: completionPercentage,
        completedTasks: completedTasks,
        uncompletedTasks: uncompletedTasks,
        totalTasks: totalTasks
    });
});

// POST - Submit Task
router.post('/', (req, res) => {
    const newTask = new Todo({
        task: req.body.task
    });

    newTask.save()
    .then(task => res.redirect('/'))
    .catch(err => console.log(err));
});

// POST - Destroy todo item
router.post('/todo/destroy', async (req, res) => {
    const taskKey = req.body._key;
    const err = await Todo.findOneAndRemove({_id: taskKey})
    res.redirect('/');
});

// POST - Destroy all todo items
router.post('/todo/destroyall', async (req, res) => {
    const todos = await Todo.find();
    const totalTasks = todos.length;
    for (let i = 0; i < totalTasks; i++) {
        await Todo.findOneAndDelete();
    }
    res.redirect('/');
});

// POST - Complete todo item
router.post('/todo/complete', async (req, res) => {
    const taskKey = req.body._key;
    const stats = await Statistics.findOne();
    await Todo.findByIdAndUpdate(taskKey, { completed: true });
    if (stats) {
        stats.totalCompleted += 1;
        await stats.save();
    }
    res.redirect('/');
});


// POST - Uncomplete todo item
router.post('/todo/uncomplete', async (req, res) => {
    const taskKey = req.body._key;
    const stats = await Statistics.findOne();
    await Todo.findByIdAndUpdate(taskKey, {completed: false});
    if (stats) {
        stats.totalCompleted -= 1;
        await stats.save();
    }
    res.redirect('/');
});


module.exports = router;