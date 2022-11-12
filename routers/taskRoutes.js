const router = require('express').Router();
const controllers = require('../controllers/taskController');

router
    .post("/", controllers.createTask)
    .put("/", controllers.updateTask)
    .delete("/:id", controllers.deleteTask)
    .get("/", controllers.getAllTasks);
module.exports = router;