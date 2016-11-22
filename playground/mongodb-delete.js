// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // destructure the require
                                                    // line + ObjectID

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Couldnt connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').deleteMany({
        text: 'Something to do'})
        .then((result) => {
            console.log(result);
        });

    db.collection('Todos').deleteOne({
        text: 'Something to do'})
        .then((result) => {
            console.log(result);
        });

    db.collection('Todos').findOneAndDelete({
        text: 'Something to do'})
        .then((result) => {
            console.log(result);
        });

    db.collection('Users').deleteMany({
        name: 'Audrey'
    });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('58347947b7b70f182cddac3b')
    }).then((result) => {
        console.log(result);
    });
    // db.close();
});
