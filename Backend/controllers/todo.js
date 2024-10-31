const mongodb = require('mongodb');
const db = require('../utils/db'); // Calling our database again
const ObjectId = mongodb.ObjectID;

// As explained in the Routes file, this will contain controllers that will perfom
// every step of the CRUD operations.

// CRUD - Create, Read, Update, Delete

// Read
exports.getIndex = (req, res, next) => {
    const todoList = [];
    db.getDB()
        .db()
        .collection('todoList')
        .find() // We are not setting any query, therefore everything is being returned
        .forEach(task => {
            console.log(task);
            todoList.push(task);
        })
        .then(result => {
            console.log(result);
            res.status(200).json(todoList);
        }).catch(err => {
            console.log(err);
            res.status(500).json({ message: 'An error occured.' });
        });
};

// Read
exports.getCompleted = (req, res, next) => {
    const todoList = [];
    db.getDB()
        .db()
        .collection('todoList')
        .find({ isCompleted: true }) // In this case, we want all tasks that are completed
        .forEach(task => {
            console.log(task);
            todoList.push(task);
        })
        .then(result => {
            console.log(result);
            res.status(200).json(todoList);
        }).catch(err => {
            console.log(err);
            res.status(500).json({ message: 'An error occured.' });
        });
};

// Read
exports.getPending = (req, res, next) => {
    const todoList = [];
    db.getDB()
        .db()
        .collection('todoList')
        .find({ isCompleted: false }) // We want all task that are not completed yet
        .forEach(task => {
            console.log(task);
            todoList.push(task);
        })
        .then(result => {
            console.log(result);
            res.status(200).json(todoList);
        }).catch(err => {
            console.log(err);
            res.status(500).json({ message: 'An error occured.' });
        });
};

// Create
exports.postTask = (req, res, next) => {
    const content = req.body.content;
    console.log(req.body)
    // We are creating our task object first, and then we will use it
    // in our database
    const newTask = {
        dateCreation: new Date().toDateString(),
        content: content,
        isCompleted: false
    };

    db.getDB()
        .db()
        .collection('todoList')
        .insertOne(newTask) // This is the command to create one object in MongoDB
        .then(result => {
            // console.log(result);
            res.status(201).json({ message: 'Task added' });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'An error occured.' });
        });
};

// Update
exports.editTask = (req, res, next) => {
    console.log(req.body)
    db.getDB()
        .db()
        .collection('todoList')
        .updateOne({ _id: new ObjectId(req.params.id) }, // The first parameter is the query to search for those we want to update
            {
                $set: { isCompleted: req.body.isCompleted }
            })      // The second parameter is to set the changes we want to make
        .then(result => {
            res.status(200).json({ message: 'Task updated' });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'An error occured.' });
        });
};

// Delete
exports.deleteTask = (req, res, next) => {
    console.log(req.params)
    db.getDB()
        .db()
        .collection('todoList')
        .deleteOne({ _id: new ObjectId(req.params.id) }) // Easy query to search for the object we want to delete
        .then(result => {
            res.status(200).json({ message: 'Task deleted' });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'An error occured.' });
        });
};
