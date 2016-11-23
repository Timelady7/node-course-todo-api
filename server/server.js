const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// const Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// });
//
// const newTodo = new Todo({
//     text: '    Feed the cat     ',
//     completed: true,
//     completedAt: new Date().getTime()
// });
//
// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (err) => {
//         console.log('Unable to save Todo', err);
// });

const User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

const newUser = new User({
    email: '   ddizdd@pouet.fr  '
});

newUser.save().then((doc) => {
    console.log('Saved user', doc);
}, (err) => {
        console.log('Unable to save User', err);
});
