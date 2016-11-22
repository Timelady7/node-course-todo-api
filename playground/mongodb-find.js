// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // destructure the require
                                                    // line + ObjectID

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Couldnt connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').find({
        _id: new ObjectID('58345fcb257f861744a98e5b')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
    
    db.collection('Users').find({
        name: 'Audrey' })
    .toArray()
    .then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
        console.log(`Users : ${docs.length}`);
    }, (err) => {
        console.log('Unale to fetch datas', err);
    });

    // db.close();
});
