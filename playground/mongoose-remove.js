const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Remove All the Todos
Todo.remove({}).then(() => {
    console.log(result);
});

// Remove one
Todo.findOneAndRemove({text: 'Something to do from postman'}).then((todo) => {
    console.log(todo);
});

// Remove a todo by Id
Todo.findByIdAndRemove('5835b414c024d11c1f3fb039').then((todo) => {
    console.log(todo);
});
