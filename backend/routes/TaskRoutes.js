const express = require("express");
const router = express.Router();

const {
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/TaskController");

router.get("/get", getTask);
router.post("/create", createTask);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

module.exports = router;
