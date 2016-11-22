// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // destructure the require
                                                    // line + ObjectID

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Couldnt connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, res) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(res.ops, undefined, 2));
    });
    
    db.collection('Users').insertOne({
        name: 'Audrey',
        age: 31,
        location: 'Paris'
    }, (err, res) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }
        console.log(JSON.stringify(res.ops, undefined, 2));
    });

    db.close();
});
