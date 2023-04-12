const express = require("express");
const router = express.Router();
const Todos = require("../models/todoListModel")

//  GET ALL THE Todos
router.get('/', async (req, res) => {
    try {
        const todos = await Todos.find();
        res.json(todos);
    } catch (error) {
        res.json(error);
    }
})
// router.get('/', (req, res) => {
//     res.send("You are on todolists TASKS page");

// });


//POST SUBMITS A Todos
router.post('/todolist', async (req, res) => {
    const todo = new Todos({
        title: req.body.title,
        description: req.body.description,
    });
    try {
        const savedTodo = await todo.save();
        res.json(savedTodo);
    } catch (error) { res.json(error) };
    // Todo.save()
    //     .then(data => {
    //         res.json(data);
    //     })
    //     .catch(err => res.json(err));
});

//GET BACK A SPECIFIC TODO
router.get('/:postId', async (req, res) => {
    try {
        const singlePost = await Todos.findById(req.params.postId);
        res.json(singlePost);
    } catch (error) { res.json(error) };
    //Or  res.sens(singlePost);
});

//DELETE BACK A SPECIFIC TODO
router.delete('/:postId', async (req, res) => {
    try {
        const deleteTodo = await Todos.findByIdAndDelete({ _id: req.params.postId });
        res.json(deleteTodo);
    } catch (error) {
        res.json(error)
        console.log(error);
    };
});

//UPDATE A SPECIFIC TODO
router.patch('/:postId', async (req, res) => {
    try {
        const updatedTodo = await Todos.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title, description: req.body.description, date: req.body.date } });
        res.json(updatedTodo);
    } catch (error) {
        res.json(error)
        console.log(error);
    };
})

module.exports = router;