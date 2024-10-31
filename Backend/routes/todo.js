const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo');

// This are the routes of the server where to go, due to the 
// nature of the activity all of them will run a specific task
// of the CRUD operations

router.get('/', todoController.getIndex);
router.get('/completed', todoController.getCompleted);
router.get('/pending', todoController.getPending);
router.post('/add-task', todoController.postTask);
router.patch('/edit-task/:id', todoController.editTask);
router.delete('/delete-task/:id', todoController.deleteTask);

module.exports = router;