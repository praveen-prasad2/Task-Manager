const express = require("express")
const router = express.Router()

const { addTask, getAllTask, getOneTask, updateTask, deleteTask } = require("../Controllers/taskcontroller")

router.post("/task", addTask)
router.get("/get-all-task", getAllTask)
router.get("/get-one-task/:id", getOneTask)
router.patch("/update-task/:id", updateTask)
router.get("/delete-task/:id", deleteTask)


module.exports = router