const mongodb = require('mongodb'); // I need to require this to get MongoDB

const MongoClient = mongodb.MongoClient; // Special feature to get clients
const mongoDBURL = 'mongodb+srv://Todou:BestoFrendo@cse341-node.1oyuy.mongodb.net/todoApp?retryWrites=true';
// My key to my MongoDB database, let's keep it secret... hehe

let _db;

const initDb = callback => {
    if (_db) {
        console.log('Database is already initialized!');
        return callback(null, _db);
    };

    // Connecting to my database using my URL key
    MongoClient.connect(mongoDBURL)
        .then(client => {
            _db = client;
            callback(null, _db);
        })
        .catch(err => {
            callback(err);
        })
};

// We need to make sure it's initialized, otherwise warn its not
const getDB = () => {
    if (!_db) {
        throw Error('Database not initialized');
    }
    return _db
};

// Export them, we will use it in other parts of the code
module.exports = {
    initDb,
    getDB
};