const task = require('../models/task');

exports.createTask = async (req, res) => {
    try {
        let task = await req.body;
        let created = await Task.create(task);
        if (!created)
          return res.status(404).json({
            success: false,
            message: "Task creation failed",
          });
        res.status(201).json({
          success: true,
          message: "Task created",
          users,
        });
    } catch (error) {
         res.status(500).json({
           success: false,
           message: "Internal server",
           error: error.message,
         });
    }
}

exports.updateTask = async (req, res) => {
    try {
        let id = { _id: req.params.id };
        let task = await req.body;
        let update = await Task.findOneAndUpdate(id, task, { new: true });
        if (!update)
          return res.status(404).json({
            success: false,
            message: "Task update failed",
          });
        res.status(200).json({
          success: true,
          message: "Task updated",
          users,
        });
    } catch (error) {
        res.status(500).json({
           success: false,
           message: "Internal server",
           error: error.message,
         });
    }
}

exports.deleteTask = async (req, res) => {
  try {
    let id = { _id: req.params.id };
    let deleted = await Task.findOneAndRemove(id);
    if (!deleted)
      return res.status(404).json({
        success: false,
        message: "Task not deleted",
      });
    res.status(200).json({
      success: true,
      message: "Task deleted",
      users,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server",
      error: error.message,
    });
  }
};


exports.getAllTasks = async (req, res) => {
    try {
        let task = await Task.find();
        if (task.length === 0)
            return res.status(404).json({
                success: false,
                message: 'No task'
            })
        res.status(200).json({
            success: true,
            message: 'Task found',
            task,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Task not found',
            error: error.message,
        });
    }
};