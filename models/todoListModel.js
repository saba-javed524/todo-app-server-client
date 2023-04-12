const mongoose = require('mongoose');

//CREATE A SCHEMA
const todoListSchema = ({
    title: {
        type: 'String',
        require: true,
    },
    description: {
        type: 'String',
        require: true,
    },
    deadline: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Todo', todoListSchema);