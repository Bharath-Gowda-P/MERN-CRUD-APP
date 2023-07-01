const Task = require("../models/TaskModel");

exports.getTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({
      success: true,
      message: "All tasks fetched",
      data: tasks,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { task } = req.body;
    const taskEntry = Task.create({ task });
    res.status(200).json({
      success: true,
      message: "Task created successfully",
      data: taskEntry,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error while creating the task",
    });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { task } = req.body;

    const taskEntry = await Task.findByIdAndUpdate({ _id: id }, { task });
    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      data: taskEntry,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: "Error while updating the task",
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    await Task.findByIdAndDelete({ _id: id });
    res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: "Error while deleting the task",
    });
  }
};
