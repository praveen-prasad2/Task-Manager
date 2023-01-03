const express = require("express")
const router = express.Router()

const {addTask}=require("../Controllers/taskcontroller")

router.post("/task",addTask)

module.exports=router