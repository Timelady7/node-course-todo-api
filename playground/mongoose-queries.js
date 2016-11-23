const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// const id = '58355fc4431b99541e4cb900'; //Todo
const id = '583493cc153354cc1d15986b'; //User

User.findById(id).then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }
    console.log('User by ID', user);
}).catch((e) => console.log(e));

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todos', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todos by ID', todo);
// }).catch((e) => console.log(e));
