const TaskModel = require("../Models/taskmodel")

const addTask = async(req,res)=>{
    try {
        let data = await TaskModel.create(req.body)
        res.send(data)
    } catch (error) {
        res.json("Error")
    }
}

module.exports={addTask}